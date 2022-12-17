package models

import (
	"github.com/gofrs/uuid"
	"gorm.io/gorm"
)

type Scope struct {
	gorm.Model
	ID          uuid.UUID   `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	Approvals   []*Approval `gorm:"many2many:approval_scopes;"`
	Clients     []*Client   `gorm:"many2many:client_scopes;"`
	Description string
	DisplayName string
	Name        string
}
