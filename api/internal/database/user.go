package database

import (
	"github.com/gofrs/uuid"
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID                  uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	Addresses           []Address
	Clients             []Client
	ClientApprovals     []ClientApproval
	Email               string `gorm:"index"`
	EmailVerified       bool
	Password            string
	PhoneNumber         string `gorm:"index"`
	PhoneNumberVerified bool
	Profile             Profile
	Username            string `gorm:"index"`
}

// func (p *User) ToPostResponse() *pb.Post {
// 	return &pb.Post{
// 		Id:          p.ID.String(),
// 		Title:       p.Title,
// 		Description: p.Description,
// 		CreatedAt:   timestamppb.New(p.CreatedAt),
// 		UpdatedAt:   timestamppb.New(p.CreatedAt),
// 	}
// }

// func ToListPostsResponse(posts []Post) *pb.ListPostsResponse {
// 	var res []*pb.Post

// 	for _, p := range posts {
// 		res = append(res, p.ToPostResponse())
// 	}

// 	return &pb.ListPostsResponse{
// 		Posts: res,
// 	}
// }
