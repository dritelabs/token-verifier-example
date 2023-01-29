package serializer

import (
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func SerializeUserModelToUserMessage(u models.User) *pb.User {
	var (
		phoneNumber = ""
		username    = ""
	)

	if u.PhoneNumber.Valid {
		phoneNumber = u.PhoneNumber.String
	}

	if u.Username.Valid {
		username = u.Username.String
	}

	return &pb.User{
		Id:                  u.ID,
		Blocked:             false,
		Clients:             []*pb.Client{},
		ClientApprovals:     []*pb.ClientApproval{},
		Email:               u.Email,
		EmailVerified:       u.EmailVerified,
		LastIp:              "",
		LastLogin:           timestamppb.New(u.CreatedAt),
		LastPasswordReset:   timestamppb.New(u.CreatedAt),
		LoginsCount:         0,
		Password:            u.Password,
		PhoneNumber:         phoneNumber,
		PhoneNumberVerified: u.PhoneNumberVerified,
		Profile:             SerializeProfileModelToProfileMessage(*u.Profile),
		Username:            username,
		CreatedAt:           timestamppb.New(u.CreatedAt),
		UpdatedAt:           timestamppb.New(u.UpdatedAt),
	}
}

func SerializeProfileModelToProfileMessage(p models.Profile) *pb.Profile {
	return &pb.Profile{
		Id:         p.ID,
		UserId:     p.UserID,
		Birthdate:  &timestamppb.Timestamp{},
		Gender:     0,
		Locale:     "",
		GivenName:  p.GivenName,
		MiddleName: p.MiddleName,
		Nickname:   "",
		Profile:    "",
		Picture:    "",
		Website:    "",
		Zoneinfo:   "",
		CreatedAt:  &timestamppb.Timestamp{},
		UpdatedAt:  &timestamppb.Timestamp{},
	}
}

func SerializeClientModelToClientMessage(c models.Client) *pb.Client {
	responseType := []pb.ResponseType{}

	for _, v := range c.ResponseTypes {
		responseType = append(responseType, pb.ResponseType(pb.ResponseType_value[v]))
	}

	return &pb.Client{
		Id:                       c.ID,
		UserId:                   c.UserID,
		Contacts:                 c.Contacts,
		ClientApprovals:          []*pb.ClientApproval{},
		Description:              c.Description,
		GrantTypes:               []pb.GrantType{},
		IsFirstParty:             c.IsFirstParty,
		Jwks:                     []*anypb.Any{},
		JwksUri:                  c.JwksUri.String(),
		LogoUri:                  c.LogoUri.String(),
		Name:                     c.Name,
		PolicyUri:                c.PolicyUri.String(),
		PublicKeysConfiguration:  (pb.PublicKeysConfiguration(pb.PublicKeysConfiguration_value[c.PublicKeysConfiguration])),
		RedirectUris:             c.RedirectUris,
		RefreshTokenRotationType: pb.RefreshTokenRotationType(pb.RefreshTokenRotationType_value[c.RefreshTokenRotationType]),
		ResponseTypes:            responseType,
		Secret:                   c.Secret,
		Scope:                    []string{},
		SoftwareId:               c.SoftwareId.String,
		SoftwareVersion:          "",
		Type:                     pb.ApplicationType(pb.ApplicationType_value[c.Type]),
		TosUri:                   c.TosUri.String(),
		TokenEndpointAuthMethod:  pb.TokenEndpointAuthMethod(pb.TokenEndpointAuthMethod_value[c.TokenEndpointAuthMethod]),
		Uri:                      c.Uri.String(),
		CreatedAt:                timestamppb.New(c.CreatedAt),
		UpdatedAt:                timestamppb.New(c.UpdatedAt),
	}
}

func SerializeClientModelListToClientMessageList(clients []models.Client) []*pb.Client {
	var res []*pb.Client

	for _, c := range clients {
		res = append(res, SerializeClientModelToClientMessage(c))
	}

	return res
}
