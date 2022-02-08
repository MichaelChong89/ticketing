import { Subjects, Publisher, PaymentCreatedEvent } from '@kyticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}