import { Publisher, OrderCreatedEvent, Subjects } from '@kyticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated;
}