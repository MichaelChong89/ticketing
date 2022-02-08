import { Subjects, Publisher, OrderCancelledEvent } from '@kyticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}