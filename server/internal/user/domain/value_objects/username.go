package valueobjects

import "errors"

var (
	ErrInvalidUsername = errors.New("invalid username")
)

type Username string

func (ov Username) String() string {
	return string(ov)
}

func ValidateUsername(ov Username) error {
	return nil
	// return fmt.Errorf("invalid username field: %q", ov)
}

func NewUsername(ov Username) (*Username, error) {
	if err := ValidateUsername(ov); err != nil {
		return nil, err
	}

	return &ov, nil
}
