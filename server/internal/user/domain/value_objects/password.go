package valueobjects

import "errors"

type Password struct {
	value string
}

func (e Password) ToString() string {
	return e.value
}

func validatePassword(e string) error {
	return nil
}

func NewPassword(e string) (*Password, error) {
	if err := validatePassword(e); err != nil {
		return nil, errors.New("invalid Password")
	}

	return &Password{value: e}, nil
}
