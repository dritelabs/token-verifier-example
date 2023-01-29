package main

import (
	"net"
	"os"

	"github.com/dritelabs/accounts/internal/config"
	"github.com/dritelabs/accounts/internal/database"
	"github.com/dritelabs/accounts/internal/gapi"
	"github.com/dritelabs/accounts/internal/logger"
	pb "github.com/dritelabs/accounts/internal/proto"
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

	database.AutoMigrate(store)

	accountServerConfig := &gapi.AccountServerConfig{
		Config:     conf,
		Store:      store,
		Jwks:       jwks,
		PrivateKey: privateKey,
	}

	grpcLogger := grpc.UnaryInterceptor(logger.GrpcLogger)
	grpcServer := grpc.NewServer(grpcLogger)
	accountServer := gapi.NewServer(accountServerConfig)

	pb.RegisterAccountServer(grpcServer, accountServer)
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
