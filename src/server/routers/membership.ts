import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const membershipRouter = trpc
  .router()
  .query('get-all-submissions', {
    async resolve() {
      const submissions = await prisma.membershipSubmission.findMany({});
      return {
        submissions,
      };
    },
  })
  .mutation('set-handled-true', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const membership = await prisma.membershipSubmission.update({
        where: {
          id: input.id,
        },
        data: {
          handled: true,
        },
      });
      return { membership };
    },
  })
  .mutation('set-handled-false', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const membership = await prisma.membershipSubmission.update({
        where: {
          id: input.id,
        },
        data: {
          handled: false,
        },
      });
      return { membership };
    },
  });
