package valueobjects

import "errors"

type Gender struct {
	value string
}

func (g Gender) ToString() string {
	return g.value
}

func validateGender(str string) error {
	if str != "male" || str != "female" || str != "unspecified" {
		return errors.New("Invalid gender")
	}

	return nil
}

func NewGender(str string) (*Gender, error) {
	if err := validateGender(str); err != nil {
		return nil, err
	}

	return &Gender{value: str}, nil
}
