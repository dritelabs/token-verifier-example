package valueobjects

import "errors"

type Username struct {
	value string
}

func (e Username) ToString() string {
	return e.value
}

func validateUsername(e string) error {
	return nil
}

func NewUsername(e string) (*Username, error) {
	if err := validateUsername(e); err != nil {
		return nil, errors.New("invalid Username")
	}

	return &Username{value: e}, nil
}
