package serializer

import (
	"github.com/dritelabs/accounts/internal/models"
	pb "github.com/dritelabs/accounts/internal/proto/drite/account/v1"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func SerializeUserModelToUserMessage(u models.User) *pb.User {
	return &pb.User{
		Id:                  u.ID,
		Blocked:             false,
		Clients:             []*pb.Client{},
		ClientApprovals:     []*pb.ClientApproval{},
		Email:               u.Email.String,
		EmailVerified:       u.EmailVerified,
		LastIp:              "",
		LastLogin:           timestamppb.New(u.CreatedAt),
		LastPasswordReset:   timestamppb.New(u.CreatedAt),
		LoginsCount:         0,
		Password:            u.Password,
		PhoneNumber:         u.PhoneNumber.String,
		PhoneNumberVerified: u.PhoneNumberVerified,
		Profile:             SerializeProfileModelToProfileMessage(u.Profile),
		Username:            u.Username.String,
		CreatedAt:           timestamppb.New(u.CreatedAt),
		UpdatedAt:           timestamppb.New(u.UpdatedAt),
	}
}

func SerializeProfileModelToProfileMessage(p *models.Profile) *pb.Profile {
	return &pb.Profile{
		Id:         p.ID,
		UserId:     p.UserID,
		Birthdate:  timestamppb.New(p.BirthDate.Time),
		Gender:     pb.Gender(pb.Gender_value[p.Gender.String]),
		Locale:     p.Locale.String,
		GivenName:  p.GivenName.String,
		MiddleName: p.MiddleName.String,
		Nickname:   p.Nickname.String,
		Profile:    p.Profile.Host,
		Picture:    p.Picture.Host,
		Website:    p.Website.Host,
		Zoneinfo:   p.ZoneInfo.String,
		CreatedAt:  timestamppb.New(p.CreatedAt),
		UpdatedAt:  timestamppb.New(p.UpdatedAt),
	}
}

func SerializeClientModelToClientMessage(c *models.Client) *pb.Client {
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
		res = append(res, SerializeClientModelToClientMessage(&c))
	}

	return res
}

func SerializeUserModelListToUserMessageList(users []models.User) []*pb.User {
	var res []*pb.User

	for _, c := range users {
		res = append(res, SerializeUserModelToUserMessage(c))
	}

	return res
}
