package entities

import (
	"time"

	valueobjects "github.com/dritelabs/accounts/internal/user/domain/value_objects"
)

type Profile struct {
	// ID         string
	// 	UserId     string
	Birthdate  time.Time
	Gender     *valueobjects.Gender
	Locale     string
	GivenName  string
	MiddleName string
	Nickname   string
	Profile    string
	Picture    string
	Website    string
	Zoneinfo   string
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

func NewProfile() (*Profile, error) {
	gender, err := valueobjects.NewGender("")
	if err != nil {
		return nil, err
	}

	return &Profile{
		Birthdate:  time.Now(),
		Gender:     gender,
		Locale:     "",
		GivenName:  "",
		MiddleName: "",
		Nickname:   "",
		Profile:    "",
		Picture:    "",
		Website:    "",
		Zoneinfo:   "",
		CreatedAt:  time.Now(),
		UpdatedAt:  time.Now(),
	}, nil
}
