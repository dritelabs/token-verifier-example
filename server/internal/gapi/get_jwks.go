package gapi

import (
	"context"

	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"google.golang.org/protobuf/types/known/anypb"
)

func (s *AccountServiceServer) GetJwks(ctx context.Context, in *pb.GetJwksRequest) (*anypb.Any, error) {
	return &anypb.Any{
		Value: []byte(s.jwks),
	}, nil
}
