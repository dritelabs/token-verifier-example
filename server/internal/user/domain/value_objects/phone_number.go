package valueobjects

import "errors"

var (
	ErrInvalidPhoneNumber = errors.New("invalid phone number")
)

type PhoneNumber string

func (ov PhoneNumber) String() string {
	return string(ov)
}

func ValidatePhoneNumber(ov PhoneNumber) error {
	return nil
	// return ErrInvalidPhoneNumber
}

func NewPhoneNumber(ov PhoneNumber) (*PhoneNumber, error) {
	if err := ValidatePhoneNumber(ov); err != nil {
		return nil, err
	}

	return &ov, nil
}
