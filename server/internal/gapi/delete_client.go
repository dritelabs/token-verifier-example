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

func (s *AccountServer) DeleteClient(ctx context.Context, req *pb.DeleteClientRequest) (*pb.Client, error) {
	log.Info().Msgf("fetching user with id %s", req.GetId())

	c := &models.Client{}

	if err := s.store.Delete(c, "id = ?", req.GetId()).Error; err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "clint not found")
		}

		return nil, status.Errorf(codes.Internal, "clint not found")
	}

	c.ID = req.GetId()

	return serializer.SerializeClientModelToClientMessage(c), nil
}
