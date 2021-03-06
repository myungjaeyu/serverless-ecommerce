import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('GET /categories', async t => {

    const res = await request(app)
                        .get('/categories')

    t.is(res.status, 200)
    t.is(res.body.message, 'categories')

})