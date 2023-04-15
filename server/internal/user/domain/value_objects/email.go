package valueobjects

import "errors"

type Email struct {
	value string
}

func (e Email) ToString() string {
	return e.value
}

func validateEmail(e string) error {
	return nil
}

func NewEmail(e string) (*Email, error) {
	if err := validateEmail(e); err != nil {
		return nil, errors.New("invalid email")
	}

	return &Email{value: e}, nil
}
