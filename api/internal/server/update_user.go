package server

import (
	"context"

	pb "github.com/dritelabs/accounts/internal/proto/v1"
)

func (s *AccountServer) UpdateUser(ctx context.Context, in *pb.UpdateUserRequest) (*pb.User, error) {

	// c := database.User{
	// 	Email:    in.GetEmail(),
	// 	Password: in.GetPassword(),
	// 	Username: in.GetUsername(),
	// }

	// err := query.Client.WithContext(ctx).Create(&c) // pass pointer of data to Create

	// if result := s.DB.Create(&c); result.Error != nil {
	// 	return nil, status.Errorf(codes.Internal, "failed to create user: %s", result.Error)
	// }

	// log.Printf("Current post id %v", p.ID)

	return &pb.User{}, nil
}
