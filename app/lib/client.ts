import type { AppType } from 'app/api/[...route]/route';
import { hc } from 'hono/client';
import { getBaseURL } from './baseUrl';

export const client = hc<AppType>(`${getBaseURL()}/api`);
