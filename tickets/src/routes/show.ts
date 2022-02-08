import express, { Request, Response, Router } from 'express';
import { NotFoundError } from '@kyticket/common';
import { Ticket } from '../models/ticket';
import { body } from 'express-validator';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        throw new NotFoundError();
    }

    res.send(ticket);
});

export { router as showTicketRouter };