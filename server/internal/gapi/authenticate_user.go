package gapi

import (
	"context"
	"errors"

	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/repository"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *AccountServiceServer) AuthenticateUser(ctx context.Context, req *pb.AuthenticateUserRequest) (*pb.TokenResponse, error) {
	log.Info().Msgf("authenticating user with email %s", req.GetEmail())

	res, err := s.userRepository.Authenticate(req.GetEmail(), req.GetPassword())

	if err != nil {
		if errors.Is(err, repository.ErrUserNotFound) || errors.Is(err, repository.ErrInvalidCredentials) {
			return nil, status.Errorf(codes.InvalidArgument, "Invalid email or password")
		}

		return nil, status.Errorf(codes.Internal, err.Error())
	}

	return &pb.TokenResponse{
		AccessToken:  res.AccessToken,
		RefreshToken: res.RefreshToken,
	}, nil
}
