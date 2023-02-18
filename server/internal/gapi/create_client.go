package gapi

import (
	"context"
	"strings"

	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"github.com/dritelabs/accounts/internal/serializer"
	gonanoid "github.com/matoous/go-nanoid/v2"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *AccountServiceServer) CreateClient(ctx context.Context, req *pb.CreateClientRequest) (*pb.Client, error) {
	log.Info().Msgf("creating client with name %s", req.GetName())

	secret, _ := gonanoid.New(32)

	c := models.Client{
		UserID:                   "lro0Xq4i3JXN1xo_z3EzW",
		Description:              req.GetDescription(),
		GrantTypes:               []string{pb.GrantType_name[int32(pb.GrantType_GRANT_TYPE_AUTHORIZATION_CODE)]},
		IsFirstParty:             false,
		Name:                     req.GetName(),
		PublicKeysConfiguration:  pb.PublicKeysConfiguration_name[int32(pb.PublicKeysConfiguration_PUBLIC_KEYS_CONFIGURATION_REMOTE)],
		RedirectUris:             req.RedirectUris,
		ResponseTypes:            []string{pb.ResponseType_name[int32(pb.ResponseType_RESPONSE_TYPE_CODE)]},
		RefreshTokenRotationType: pb.RefreshTokenRotationType_name[int32(pb.RefreshTokenRotationType_REFRESH_TOKEN_ROTATION_TYPE_ROTATE)],
		Secret:                   secret,
		TokenEndpointAuthMethod:  (pb.TokenEndpointAuthMethod_name[int32(pb.TokenEndpointAuthMethod_TOKEN_ENDPOINT_AUTH_METHOD_PRIVATE_KEY_JWT)]),
		Type:                     pb.ApplicationType_name[int32(req.GetType())],
	}

	if err := s.store.Create(&c).Error; err != nil {
		log.Error().Msgf("failed to create client: %s", err)

		if strings.Contains(err.Error(), "unique constraint") {
			return nil, status.Errorf(codes.AlreadyExists, "%s is already exist", req.GetName())
		}

		return nil, status.Errorf(codes.Internal, "failed to create client:", err)
	}

	return serializer.SerializeClientModelToClientMessage(&c), nil
}
