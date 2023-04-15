package gapi

import (
	"context"
	"database/sql"
	"strings"

	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/serializer"
	usecases "github.com/dritelabs/accounts/internal/user/application/use_cases"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *AccountServiceServer) CreateUser(ctx context.Context, req *pb.CreateUserRequest) (*pb.User, error) {
	log.Info().Msgf("creating user with email %s", req.GetEmail())

	hash, err := crypto.HashPassword(req.GetPassword())

	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %s", err)
	}

	s.userModule.UseCases.CreateUser(ctx, usecases.CreateUserDTO{})

	u := models.User{
		Email:    sql.NullString{Valid: true, String: req.GetEmail()},
		Password: hash,
		Profile: &models.Profile{
			GivenName:  sql.NullString{Valid: true, String: req.GetGivenName()},
			MiddleName: sql.NullString{Valid: true, String: req.GetMiddleName()},
		},
	}

	if err := s.store.Create(&u).Error; err != nil {
		log.Error().Msgf("failed to create user: %s", err)

		if strings.Contains(err.Error(), "unique constraint") {
			return nil, status.Errorf(codes.AlreadyExists, "%s is already taken", req.GetEmail())
		}

		return nil, status.Errorf(codes.Internal, "failed to create user: %s", err)
	}

	return serializer.SerializeUserModelToUserMessage(u), nil
}
