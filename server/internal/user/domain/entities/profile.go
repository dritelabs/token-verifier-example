package entities

import (
	"time"

	valueobjects "github.com/dritelabs/accounts/internal/user/domain/value_objects"
)

type Profile struct {
	// ID         string
	// 	UserId     string
	BirthDate  time.Time
	Gender     *valueobjects.Gender
	Locale     string
	GivenName  string
	MiddleName string
	Nickname   string
	Profile    string
	Picture    string
	Website    string
	ZoneInfo   string
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

func NewProfile() (*Profile, error) {
	gender, err := valueobjects.NewGender(valueobjects.GenderMale)

	if err != nil {
		return nil, err
	}

	return &Profile{
		BirthDate:  time.Now(),
		Gender:     gender,
		Locale:     "",
		GivenName:  "",
		MiddleName: "",
		Nickname:   "",
		Profile:    "",
		Picture:    "",
		Website:    "",
		ZoneInfo:   "",
		CreatedAt:  time.Now(),
		UpdatedAt:  time.Now(),
	}, nil
}
