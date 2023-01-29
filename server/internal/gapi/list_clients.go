package gapi

import (
	"context"
	"errors"

	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/serializer"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *AccountServer) ListClients(ctx context.Context, req *pb.ListClientsRequest) (*pb.ListClientsResponse, error) {
	log.Info().Msgf("fetching clients")

	var clients []models.Client

	if err := s.Store.Limit(10).Find(&clients).Error; err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "Invalid client")
		}

		return nil, status.Errorf(codes.Internal, "Invalid client")
	}

	return &pb.ListClientsResponse{
		Clients: serializer.SerializeClientModelListToClientMessageList(clients),
	}, nil
}
