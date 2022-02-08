import request from 'supertest';
import { app } from '../../app';



const createTicket = async () => {
    return request(app)
    .post('/api/tickets')
    .set('Cookie', await signin())
    .send({
        title: 'adfd',
        price: 20
    })
}

it('can fetch a list of tickets', async () => {
    
    // await request(app)
    //     .post('/api/tickets')
    //     .set('Cookie', await signin())
    //     .send({
    //         title: 'adfd',
    //         price: 20
    //     })

    // await request(app)
    //     .post('/api/tickets')
    //     .set('Cookie', await signin())
    //     .send({
    //         title: 'adfd',
    //         price: 20
    //     })

    await createTicket();

    await createTicket();

    await createTicket();

    const response = await request(app)
        .get('/api/tickets')
        .send()
        .expect(200)
    
    expect(response.body.length).toEqual(3);
    

    
})