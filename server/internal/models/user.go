package models

import (
	"database/sql"

	gonanoid "github.com/matoous/go-nanoid/v2"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID                       string `gorm:"primaryKey"`
	DefaultShippingAddressID string
	DefaultBillingAddressID  string
	Addresses                []Address
	Approvals                []*Approval `gorm:"many2many:user_approvals;"`
	Clients                  []Client
	Email                    string `gorm:"uniqueIndex"`
	EmailVerified            bool
	Password                 string
	PhoneNumber              sql.NullString `gorm:"uniqueIndex"`
	PhoneNumberVerified      bool
	Profile                  *Profile
	DefaultShippingAddress   *Address
	DefaultBillingAddress    *Address
	// DefaultShippingAddress   *Address `gorm:"foreignKey:DefaultShippingAddressID"`
	// DefaultBillingAddress    *Address `gorm:"foreignKey:DefaultBillingAddressID"`
	Username sql.NullString `gorm:"uniqueIndex"`
}

func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	id, err := gonanoid.New()

	u.ID = id

	return
}

// func (u *User) ToUserResponse() *pb.UserResponse {
// 	return &pb.UserResponse{
// 		User: &pb.User{
// 			Id:        u.ID,
// 			Email:     u.Email,
// 			Username:  u.Username,
// 			CreatedAt: timestamppb.New(u.CreatedAt),
// 			UpdatedAt: timestamppb.New(u.CreatedAt),
// 		},
// 	}
// }

// func ToListUsersResponse(users []User) *pb.UsersResponse {
// 	var res []*pb.User

// 	for _, p := range users {
// 		res = append(res, p.ToUserResponse().User)
// 	}

// 	return &pb.UsersResponse{
// 		Users: res,
// 	}
// }
