package models

import (
	"github.com/gofrs/uuid"
	"gorm.io/gorm"
)

type Approval struct {
	gorm.Model
	ID       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	ClientID uuid.UUID
	UserID   uuid.UUID
	Scopes   []*Scope  `gorm:"many2many:approval_scopes;"`
	Clients  []*Client `gorm:"many2many:client_approvals;"`
	Users    []*User   `gorm:"many2many:user_approvals;"`
}
