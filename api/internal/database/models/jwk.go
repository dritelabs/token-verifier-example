package models

import (
	"github.com/gofrs/uuid"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Jwk struct {
	gorm.Model
	ID       uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primarykey"`
	ClientID uuid.UUID
	Client   Client
	Jwk      datatypes.JSON
}
