package gapi

import (
	"context"

	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/serializer"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

func (s *AccountServiceServer) ListUsers(ctx context.Context, req *pb.ListUsersRequest) (*pb.ListUsersResponse, error) {
	log.Info().Msgf("fetching users")

	md, _ := metadata.FromIncomingContext(ctx)

	token := md.Get("authorization")[0]

	log.Info().Msgf("%s", token)

	var users []models.User

	if err := s.store.Limit(10).Preload("Profile").Find(&users).Error; err != nil {
		log.Error().Msgf("failed to fetch users: %s", err)

		return nil, status.Errorf(codes.Internal, err.Error())
	}

	return &pb.ListUsersResponse{
		Users: serializer.SerializeUserModelListToUserMessageList(users),
	}, nil
}
