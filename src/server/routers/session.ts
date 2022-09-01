import * as trpc from '@trpc/server';
import { z } from 'zod';

export const sessionRouter = trpc.router().query('validate-session', {
  input: z.object({
    username: z.string(),
    password: z.string(),
  }),
  async resolve({ input }) {
    const validation =
      input.username == 'management-sccabreiros@sccabreiros.org' &&
      input.password == 'management-sccabreiros.org';
    return {
      validation: validation,
      username: input.username,
    };
  },
});
