package gapi

import (
	"context"

	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/serializer"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *AccountServer) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	log.Info().Msgf("fetching clients")

	var users []models.User

	if err := s.store.Limit(10).Preload("Profile").Find(&users).Error; err != nil {
		log.Error().Msgf("failed to fetch users: %s", err)

		return nil, status.Errorf(codes.Internal, err.Error())
	}

	return &pb.ListUsersResponse{
		Users: serializer.SerializeUserModelListToUserMessageList(users),
	}, nil
}
