import {
     Subjects, 
     Publisher, 
     ExpirationCompleteEvent 
} from '@kyticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}