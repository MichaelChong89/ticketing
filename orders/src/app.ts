import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@kyticket/common';

import { deleteOrderRouter } from './routes/delete';
import { indexOrderRouter } from './routes/index';
import { newOrderRouter } from './routes/new';
import { showOrderRouter } from './routes/show';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    // cookieSession({
    //     signed: false,
    //     // secure: true, //When secure is set to true, Cookie only to be shared when making http request to our server vie https
    //     secure: process.env.NODE_ENV !== 'test'
    // })
    cookieSession({
        signed: false,
        // secure: true, //When secure is set to true, Cookie only to be shared when making http request to our server vie https
        secure: false
    })
);

app.use(currentUser);

app.use(deleteOrderRouter);
app.use(indexOrderRouter);
app.use(newOrderRouter);
app.use(showOrderRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };