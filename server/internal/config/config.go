package config

import (
	"fmt"
	"os"

	"github.com/spf13/viper"
)

type Config struct {
	DBSource          string `mapstructure:"DB_SOURCE"`
	Environment       string `mapstructure:"ENVIRONMENT"`
	GRPCServerAddress string `mapstructure:"GRPC_SERVER_ADDRESS"`
	HTTPServerAddress string `mapstructure:"HTTP_SERVER_ADDRESS"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.SetConfigName("local")
	viper.SetConfigType("env")
	viper.AddConfigPath(path)
	viper.AutomaticEnv()

	if err = viper.ReadInConfig(); err != nil {
		return
	}

	err = viper.Unmarshal(&config)

	return
}

func LoadPrivateKey() (string, error) {
	bytes, err := os.ReadFile("configs/private.pem")

	if err != nil {
		return "", fmt.Errorf("failed to read jwks %s", err)
	}

	return string(bytes), nil
}

func LoadJwks() (string, error) {
	bytes, err := os.ReadFile("configs/jwks.json")

	if err != nil {
		return "", fmt.Errorf("failed to read jwks %s", err)
	}

	return string(bytes), nil
}
