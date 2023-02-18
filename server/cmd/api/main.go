package main

import (
	"net"
	"os"

	"github.com/dritelabs/accounts/internal/config"
	"github.com/dritelabs/accounts/internal/database"
	"github.com/dritelabs/accounts/internal/gapi"
	"github.com/dritelabs/accounts/internal/logger"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/repository"
	"github.com/dritelabs/accounts/internal/token"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	conf, err := config.LoadConfig(".")
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to load config")
	}

	if conf.Environment == "development" {
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}

	privateKey, err := config.LoadPrivateKey()
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to load privateKey")
	}

	jwks, err := config.LoadJwks()
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to load jwks")
	}

	store, err := database.NewDatabase(conf.DBSource)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to connect database")
	}

	tokenMaker := token.NewTokenMaker(&token.NewTokenMakerConfig{
		PrivateKey: privateKey,
		Jwks:       jwks,
	})

	userRepository := repository.NewUserRepository(&repository.NewUserRepositoryConfig{
		Config:     conf,
		Store:      store,
		TokenMaker: tokenMaker,
	})

	if conf.Environment == "development" {
		if err := database.AutoMigrate(store); err != nil {
			log.Fatal().Err(err).Msg("Failed to connect database")
		}
	}

	accountServiceServerConfig := &gapi.AccountServiceServerConfig{
		Config:         conf,
		Store:          store,
		Jwks:           jwks,
		PrivateKey:     privateKey,
		TokenMaker:     tokenMaker,
		UserRepository: userRepository,
	}

	grpcLogger := grpc.UnaryInterceptor(logger.GrpcLogger)
	grpcServer := grpc.NewServer(grpcLogger)
	accountServiceServer := gapi.NewServer(accountServiceServerConfig)

	pb.RegisterAccountServiceServer(grpcServer, accountServiceServer)
	reflection.Register(grpcServer)

	listener, err := net.Listen("tcp", conf.GRPCServerAddress)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to create listener")
	}

	log.Info().Msgf("Server listening on %s", listener.Addr().String())

	err = grpcServer.Serve(listener)
	if err != nil {
		log.Fatal().Err(err).Msg("failed to start server")
	}
}
