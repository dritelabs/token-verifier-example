package database

import (
	"database/sql"

	"github.com/gofrs/uuid"
	"gorm.io/gorm"
)

type Client struct {
	gorm.Model
	ID     uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	UserID uuid.UUID
	Name   string
	// ClientApprovals []ClientApproval
	// Contacts []string
	Description sql.NullString
	// Type        string `gorm:"type:ENUM('browser', 'native', 'web');default:'web'"`
	// Type      ApplicationTpe `sql:"type:ENUM('BROWSER', 'NATIVE', 'WEB')" gorm:"column:type"`
	Type ApplicationTpe `json:"ecosystem" sql:"type:ENUM('BROWSER', 'NATIVE', 'WEB')"`
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
