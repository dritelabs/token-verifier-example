package main

import (
	"net"
	"os"

	"github.com/dritelabs/accounts/internal/config"
	"github.com/dritelabs/accounts/internal/database"
	"github.com/dritelabs/accounts/internal/logger"
	pb "github.com/dritelabs/accounts/internal/proto/v1"
	server "github.com/dritelabs/accounts/internal/server"
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

	db, err := database.New(conf.DBSource)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to connect database")
	}

	if err = database.AutoMigrate(db); err != nil {
		log.Fatal().Err(err).Msg("Failed to migrate database")
	}

	// database.Generate(db)

	grpcLogger := grpc.UnaryInterceptor(logger.GrpcLogger)
	grpcServer := grpc.NewServer(grpcLogger)
	accountServer := server.New(&server.AccountServerConfig{
		Config: conf,
		DB:     db,
	})

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
