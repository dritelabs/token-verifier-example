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

func (s *AccountServer) GetClient(ctx context.Context, req *pb.GetClientRequest) (*pb.Client, error) {
	log.Info().Msgf("fetching client with id %s", req.GetId())

	c := models.Client{}

	if err := s.Store.First(&c, "id = ?", req.GetId()).Error; err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "Invalid client")
		}

		return nil, status.Errorf(codes.Internal, "Invalid client")
	}

	return serializer.SerializeClientModelToClientMessage(c), nil
}
