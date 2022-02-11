import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@kyticket/common';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';


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

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };