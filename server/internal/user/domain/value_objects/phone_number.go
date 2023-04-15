package valueobjects

import "errors"

type PhoneNumber struct {
	value string
}

func (e PhoneNumber) ToString() string {
	return e.value
}

func validatePhoneNumber(e string) error {
	return nil
}

func NewPhoneNumber(e string) (*PhoneNumber, error) {
	if err := validatePhoneNumber(e); err != nil {
		return nil, errors.New("invalid PhoneNumber")
	}

	return &PhoneNumber{value: e}, nil
}
