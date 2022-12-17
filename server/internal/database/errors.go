package database

import "github.com/jackc/pgconn"

var (
	ErrUniqueViolation = &pgconn.PgError{Code: "23505"}
)
