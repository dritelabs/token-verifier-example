package gapi

import (
	"context"
	"errors"

	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *AccountServer) AuthenticateUser(ctx context.Context, req *pb.AuthenticateUserRequest) (*pb.AuthenticateUserResponse, error) {
	log.Info().Msgf("authenticating user with email %s", req.GetEmail())

	u := models.User{}

	if err := s.Store.First(&u, "email = ?", req.GetEmail()).Error; err != nil {
		log.Error().Msgf("failed to authenticate user: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.InvalidArgument, "Invalid email or password")
		}

		return nil, status.Errorf(codes.InvalidArgument, "Invalid email or password")
	}

	if err := crypto.ComparePassword(u.Password, req.GetPassword()); err != nil {
		log.Error().Msgf("failed to authenticate user: %s", err)

		return nil, status.Errorf(codes.InvalidArgument, "Invalid email or password")
	}

	return &pb.AuthenticateUserResponse{
		AccessToken:  u.ID,
		RefreshToken: u.ID,
	}, nil
}
