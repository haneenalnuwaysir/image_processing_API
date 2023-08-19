import supertest from 'supertest';
import app from '../index';


const request = supertest(app);

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
  }
)});

describe('Test image endpoint response', () => {
  it('gets the image api endpoint', async () => {
    const response = await request.get('/api/images?filename=palmtunnel&width=200&height=200');
    expect(response.status).toBe(200);
  });

});





