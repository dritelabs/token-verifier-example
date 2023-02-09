package gapi

import (
	"context"
	"errors"
	"time"

	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/token"
	"github.com/golang-jwt/jwt/v4"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *AccountServer) AuthenticateUser(ctx context.Context, req *pb.AuthenticateUserRequest) (*pb.AuthenticateUserResponse, error) {
	log.Info().Msgf("authenticating user with email %s", req.GetEmail())

	u := models.User{}

	if err := s.store.First(&u, "email = ?", req.GetEmail()).Error; err != nil {
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

	accessToken, err := s.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "http://localhost:3000",
				Subject:   "",
				Audience:  []string{},
				ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Millisecond * time.Duration(s.config.AccessTokenExpirationTime))},
				NotBefore: &jwt.NumericDate{},
				IssuedAt:  &jwt.NumericDate{Time: time.Now()},
				ID:        "testing",
			},
		},
		Headers: &token.Headers{
			Typ: "at+jwt",
		},
	})

	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}

	refreshToken, err := s.tokenMaker.SignToken(token.SignTokenConfig{
		Claims: &token.Claims{
			RegisteredClaims: jwt.RegisteredClaims{
				Issuer:    "http://localhost:3000",
				Subject:   "",
				Audience:  []string{},
				ExpiresAt: &jwt.NumericDate{Time: time.Now().Add(time.Millisecond * time.Duration(s.config.AccessTokenExpirationTime))},
				NotBefore: &jwt.NumericDate{},
				IssuedAt:  &jwt.NumericDate{Time: time.Now()},
				ID:        "",
			},
		},
		Headers: &token.Headers{
			Typ: "rt+jwt",
		},
	})

	if err != nil {
		return nil, status.Errorf(codes.Internal, err.Error())
	}

	return &pb.AuthenticateUserResponse{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	}, nil
}
