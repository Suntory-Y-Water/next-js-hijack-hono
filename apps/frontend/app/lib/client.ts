import type { AppType } from '@hono-hijack/backend';
import { hc } from 'hono/client';
import { getBaseURL } from './baseUrl';

export const client = hc<AppType>(`${getBaseURL()}/api`);
