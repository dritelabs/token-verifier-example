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

func (s *AccountServer) GetUser(ctx context.Context, req *pb.GetUserRequest) (*pb.User, error) {
	log.Info().Msgf("fetching user with id %s", req.GetId())

	u := models.User{}

	if err := s.store.Preload("Profile").First(&u, "id = ?", req.GetId()).Error; err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}

		return nil, status.Errorf(codes.Internal, "user not found")
	}

	return serializer.SerializeUserModelToUserMessage(u), nil
}
