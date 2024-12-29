import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>()
  .basePath('/api')
  .get('/hello', (c) => {
    return c.json({ message: 'Hello World!' });
  })
  .get('/message/:message', (c) => {
    const message = c.req.param('message');
    return c.json({ message: `input is  ${message}!` });
  });

const route = app.route('/', app);
export type AppType = typeof route;
export const GET = handle(route);
