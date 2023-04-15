package domain

type AggregateRoot struct {
	domainEvents []DomainEvent
}

func (ar *AggregateRoot) AddEvent(e DomainEvent) {
	ar.domainEvents = append(ar.domainEvents, e)
}

func (ar *AggregateRoot) DomainEvents() []DomainEvent {
	return ar.domainEvents
}
