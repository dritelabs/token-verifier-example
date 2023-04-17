package valueobjects

import "errors"

var (
	ErrInvalidPassword = errors.New("invalid password")
)

type Password string

func (ov Password) String() string {
	return string(ov)
}

func ValidatePassword(ov Password) error {
	return nil
	// return ErrInvalidPassword
}

func NewPassword(ov Password) (*Password, error) {
	if err := ValidatePassword(ov); err != nil {
		return nil, err
	}

	return &ov, nil
}
