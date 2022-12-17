package server

import (
	"context"
	"errors"

	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/database"
	"github.com/dritelabs/accounts/internal/database/models"
	pb "github.com/dritelabs/accounts/internal/proto/v1"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *AccountServer) CreateUser(ctx context.Context, in *pb.CreateUserRequest) (*pb.User, error) {
	log.Info().Msgf("creating user with email %s", in.GetEmail())

	hash, err := crypto.HashPassword(in.GetPassword())

	if err != nil {
		return nil, status.Errorf(codes.InvalidArgument, "failed to hash password %s", err)
	}

	u := models.User{
		Email:    in.GetEmail(),
		Password: hash,
		Username: in.GetUsername(),
		Profile:  &models.Profile{},
	}

	if result := s.DB.Create(&u); result.Error != nil {
		if errors.As(result.Error, &database.ErrUniqueViolation) {
			return nil, status.Errorf(codes.AlreadyExists, "user already exists: %s", result.Error)
		}

		return nil, status.Errorf(codes.Internal, "failed to create user: %s", result.Error)
	}

	log.Info().Msgf("user with email %s was successfully created", in.GetEmail())

	return u.ToUserResponse(), nil
}
