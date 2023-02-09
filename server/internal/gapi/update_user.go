package gapi

import (
	"context"
	"database/sql"
	"errors"
	"fmt"

	"github.com/dritelabs/accounts/internal/crypto"
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"github.com/dritelabs/accounts/internal/serializer"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"gorm.io/gorm"
)

func (s *AccountServer) UpdateUser(ctx context.Context, req *pb.UpdateUserRequest) (*pb.User, error) {
	log.Info().Msgf("fetching user with id %s", req.GetId())

	u := models.User{}

	fmt.Print(req.Profile.GivenName != nil && len(*req.GetProfile().GivenName) != 0)
	fmt.Print(req.GetProfile().GetGivenName())

	updateUserArg := models.User{
		Email:       sql.NullString{Valid: req.Email != nil && len(*req.Email) != 0, String: req.GetEmail()},
		Username:    sql.NullString{Valid: req.Username != nil && len(*req.Username) != 0, String: req.GetUsername()},
		PhoneNumber: sql.NullString{Valid: req.PhoneNumber != nil && len(*req.PhoneNumber) != 0, String: req.GetPhoneNumber()},
	}

	if req.Password != nil && len(*req.Password) != 0 {
		hash, err := crypto.HashPassword(req.GetPassword())

		if err != nil {
			return nil, status.Errorf(codes.Internal, "failed to hash password: %s", err)
		}

		(&updateUserArg).Password = hash
	}

	err := s.store.Model(&models.User{}).Where("id = ?", req.GetId()).Updates(updateUserArg).Error

	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to update user: %s", err)
	}

	if req.Profile != nil {
		updateProfileArg := &models.Profile{
			GivenName: sql.NullString{Valid: req.Profile.GivenName != nil && len(*req.GetProfile().GivenName) != 0, String: req.GetProfile().GetGivenName()},
		}

		err := s.store.Model(&models.Profile{}).Where("user_id = ?", req.GetId()).Updates(updateProfileArg).Error

		if err != nil {
			return nil, status.Errorf(codes.Internal, "failed to update profile: %s", err)
		}
	}

	err = s.store.Preload("Profile").First(&u, "id = ?", req.GetId()).Error

	if err != nil {
		log.Error().Msgf("failed to fetch client: %s", err)

		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}

		return nil, status.Errorf(codes.Internal, "user not found")
	}

	return serializer.SerializeUserModelToUserMessage(u), nil
}

// string id = 1;
// optional string email = 2;
// optional string password = 3;
// optional string phone_number = 4;
// optional string username = 5;
// optional UpdateProfileRequest profile = 6;

// message UpdateProfileRequest {
//   string id = 1;
//   optional google.protobuf.Timestamp birthdate = 3;
//   optional Gender gender = 4;
//   optional string locale = 5;
//   optional string given_name = 6;
//   optional string middle_name = 7;
//   optional string nickname = 8;
//   optional string profile = 9;
//   optional string picture = 10;
//   optional string website = 11;
//   optional string zoneinfo = 12;
// }
