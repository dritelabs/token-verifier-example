package server

import (
	"github.com/dritelabs/accounts/internal/config"
	pb "github.com/dritelabs/accounts/internal/proto/v1"
	"github.com/dritelabs/accounts/internal/token"
	"gorm.io/gorm"
)

type AccountServer struct {
	pb.UnimplementedAccountServer
	AccountServerConfig
}

type AccountServerConfig struct {
	Config     config.Config
	DB         *gorm.DB
	Jwks       string
	PrivateKey string
	TokenMaker token.TokenMaker
}

func New(c *AccountServerConfig) *AccountServer {
	return &AccountServer{
		AccountServerConfig: AccountServerConfig{
			Config:     c.Config,
			DB:         c.DB,
			Jwks:       c.Jwks,
			PrivateKey: c.PrivateKey,
			TokenMaker: c.TokenMaker,
		},
	}
}
