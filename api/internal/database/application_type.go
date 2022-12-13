package database

import "database/sql/driver"

type ApplicationTpe string

const (
	BROWSER ApplicationTpe = "browser"
	NATIVE  ApplicationTpe = "native"
	WEB     ApplicationTpe = "web"
)

func (a *ApplicationTpe) Scan(value interface{}) error {
	*a = ApplicationTpe(value.([]byte))

	return nil
}

func (a ApplicationTpe) Value() (driver.Value, error) {
	return string(a), nil
}
