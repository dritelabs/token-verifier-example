package valueobjects

import (
	"errors"
)

var (
	ErrInvalidGender = errors.New("invalid enum value for gender")
)

type Gender string

const (
	GenderUnspecified Gender = "unspecified"
	GenderMale        Gender = "male"
	GenderFemale      Gender = "female"
)

func (ov Gender) String() string {
	return string(ov)
}

// ValidateGender is a validator for the "gender" field enum values. It is called by the builders before save.
func ValidateGender(ov Gender) error {
	switch ov {
	case GenderUnspecified, GenderMale, GenderFemale:
		return nil
	default:
		return ErrInvalidGender
	}
}

func NewGender(ov Gender) (*Gender, error) {
	if err := ValidateGender(ov); err != nil {
		return nil, err
	}

	return &ov, nil
}
