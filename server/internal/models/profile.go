package models

import (
	"database/sql"
	"time"

	gonanoid "github.com/matoous/go-nanoid/v2"
	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Profile struct {
	gorm.Model
	ID         string `gorm:"primarykey"`
	UserID     string
	BirthDate  *time.Time
	GivenName  string
	Gender     sql.NullString
	Locale     sql.NullString
	MiddleName string
	Nickname   sql.NullString
	Profile    datatypes.URL
	Picture    datatypes.URL
	User       User
	Website    datatypes.URL
	ZoneInfo   sql.NullString
}

func (u *Profile) BeforeCreate(tx *gorm.DB) (err error) {
	id, err := gonanoid.New()

	u.ID = id

	return
}
