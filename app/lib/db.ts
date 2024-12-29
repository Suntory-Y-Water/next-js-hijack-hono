import { getRequestContext } from '@cloudflare/next-on-pages';
import { drizzle } from 'drizzle-orm/d1';

export const runtime = 'edge';

export function getDb() {
  const context = getRequestContext();
  const d1 = context.env.DB;
  return drizzle(d1);
}
