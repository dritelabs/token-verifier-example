package models

import (
	pb "github.com/dritelabs/accounts/internal/proto/v1"
	"github.com/gofrs/uuid"
	"google.golang.org/protobuf/types/known/timestamppb"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID                       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	DefaultShippingAddressID uuid.UUID
	DefaultBillingAddressID  uuid.UUID
	Addresses                []Address
	Approvals                []*Approval `gorm:"many2many:user_approvals;"`
	Clients                  []Client
	Email                    string `gorm:"index"`
	EmailVerified            bool
	Password                 string
	PhoneNumber              string `gorm:"index"`
	PhoneNumberVerified      bool
	Profile                  *Profile
	DefaultShippingAddress   *Address `gorm:"foreignKey:DefaultShippingAddressID"`
	DefaultBillingAddress    *Address `gorm:"foreignKey:DefaultBillingAddressID"`
	Username                 string   `gorm:"index"`
}

func (u *User) ToUserResponse() *pb.User {
	return &pb.User{
		Id:        u.ID.String(),
		Email:     u.Email,
		Username:  u.Username,
		CreatedAt: timestamppb.New(u.CreatedAt),
		UpdatedAt: timestamppb.New(u.CreatedAt),
	}
}

func ToListUsersResponse(posts []User) *pb.ListUsersResponse {
	var res []*pb.User

	for _, p := range posts {
		res = append(res, p.ToUserResponse())
	}

	return &pb.ListUsersResponse{
		Users: res,
	}
}
