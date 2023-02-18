package gapi

import (
	"context"
	"errors"

	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/serializer"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *AccountServiceServer) GetClient(ctx context.Context, req *pb.GetClientRequest) (*pb.Client, error) {
	log.Info().Msgf("fetching client with id %s", req.GetId())

	c := models.Client{}

	if err := s.store.First(&c, "id = ?", req.GetId()).Error; err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "client not found")
		}

		return nil, status.Errorf(codes.Internal, "client not found")
	}

	return serializer.SerializeClientModelToClientMessage(&c), nil
}
