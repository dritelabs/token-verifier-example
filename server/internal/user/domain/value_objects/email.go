package valueobjects

import "errors"

var (
	ErrInvalidEmail = errors.New("invalid email")
)

type Email string

func (ov Email) String() string {
	return string(ov)
}

func ValidateEmail(ov Email) error {
	return nil
	// return ErrInvalidEmail
}

func NewEmail(ov Email) (*Email, error) {
	if err := ValidateEmail(ov); err != nil {
		return nil, err
	}

	return &ov, nil
}
