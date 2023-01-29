package models

import (
	"database/sql"

	"github.com/lib/pq"
	gonanoid "github.com/matoous/go-nanoid/v2"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Client struct {
	gorm.Model
	ID                       string `gorm:"primaryKey"`
	UserID                   string
	Approvals                []*Approval    `gorm:"many2many:client_approvals;"`
	Contacts                 pq.StringArray `gorm:"type:text[]"`
	Description              string
	GrantTypes               pq.StringArray `gorm:"type:text[]"`
	IsFirstParty             bool
	Jwks                     datatypes.JSON
	JwksUri                  datatypes.URL
	LogoUri                  datatypes.URL
	Name                     string `gorm:"uniqueIndex"`
	PolicyUri                datatypes.URL
	PublicKeysConfiguration  string
	RedirectUris             pq.StringArray `gorm:"type:text[]"`
	ResponseTypes            pq.StringArray `gorm:"type:text[]"`
	RefreshTokenRotationType string
	Secret                   string
	Scopes                   []*Scope `gorm:"many2many:client_scopes;"`
	SoftwareId               sql.NullString
	SoftwareVersion          sql.NullString
	TosUri                   datatypes.URL
	TokenEndpointAuthMethod  string
	Type                     string
	Uri                      datatypes.URL
	User                     *User
}

func (c *Client) BeforeCreate(tx *gorm.DB) (err error) {
	c.ID, _ = gonanoid.New()

	return
}

// func (c *Client) ToClientResponse() *pb.ClientResponse {
// 	responseType := []pb.ResponseType{}

// 	for _, v := range c.ResponseTypes {
// 		responseType = append(responseType, pb.ResponseType(pb.ResponseType_value[v]))
// 	}

// 	return &pb.ClientResponse{
// 		Client: &pb.Client{
// 			Id:                       c.PublicID,
// 			UserId:                   c.UserID.String(),
// 			Contacts:                 c.Contacts,
// 			ClientApprovals:          []*pb.ClientApproval{},
// 			Description:              *c.Description,
// 			GrantTypes:               []pb.GrantType{},
// 			IsFirstParty:             c.IsFirstParty,
// 			Jwks:                     []*anypb.Any{},
// 			JwksUri:                  c.JwksUri.String(),
// 			LogoUri:                  c.LogoUri.String(),
// 			Name:                     c.Name,
// 			PolicyUri:                c.PolicyUri.String(),
// 			PublicKeysConfiguration:  pb.PublicKeysConfiguration(pb.PublicKeysConfiguration_value[c.PublicKeysConfiguration]),
// 			RedirectUris:             c.RedirectUris,
// 			RefreshTokenRotationType: pb.RefreshTokenRotationType(pb.RefreshTokenRotationType_value[c.RefreshTokenRotationType]),
// 			ResponseTypes:            responseType,
// 			Secret:                   *c.Secret,
// 			Scope:                    []string{},
// 			SoftwareId:               *c.SoftwareId,
// 			SoftwareVersion:          "",
// 			Type:                     pb.ApplicationType(pb.ApplicationType_value[c.Type]),
// 			TosUri:                   c.TosUri.String(),
// 			TokenEndpointAuthMethod:  pb.TokenEndpointAuthMethod(pb.TokenEndpointAuthMethod_value[c.TokenEndpointAuthMethod]),
// 			Uri:                      c.Uri.String(),
// 			CreatedAt:                timestamppb.New(c.CreatedAt),
// 			UpdatedAt:                timestamppb.New(c.UpdatedAt),
// 		},
// 	}
// }
