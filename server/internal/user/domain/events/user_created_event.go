package events

import (
	"time"

	"github.com/dritelabs/accounts/internal/shared_kernel/domain"
)

type UserCreatedEvent struct {
	UserID string
}

func (e *UserCreatedEvent) CreateAt() time.Time {
	return time.Now()
}

func (e *UserCreatedEvent) String() string {
	return "UserCreated"
}

func NewUserCreatedEvent(id string) domain.DomainEvent {
	return &UserCreatedEvent{
		UserID: id,
	}
}
