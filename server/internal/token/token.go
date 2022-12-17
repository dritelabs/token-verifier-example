package token

type SignTokenConfig struct{}

type TokenMaker interface {
	// CreateToken creates a new token
	SignToken(*Claims) (string, error)
}
