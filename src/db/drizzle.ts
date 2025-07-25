import { schema } from '@/db/schema';
import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.DATABASE_URL!, { schema });
