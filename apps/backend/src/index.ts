import { Hono } from 'hono';

const app = new Hono()
  .get('/hello', (c) => {
    return c.json({ message: 'Hello World!' });
  })
  .get('/message/:message', (c) => {
    const message = c.req.param('message');
    return c.json({ message: `input is  ${message}!` });
  });

export type AppType = typeof app;
export { app };
