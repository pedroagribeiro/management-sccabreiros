import * as trpc from '@trpc/server';
import { z } from 'zod';
import { prisma } from '../utils/prisma';

export const contactRouter = trpc
  .router()
  .query('get-all-contacts', {
    async resolve() {
      const contacts = await prisma.contact.findMany({});
      return {
        contacts,
      };
    },
  })
  .mutation('set-read-true', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const contact = await prisma.contact.update({
        where: {
          id: input.id,
        },
        data: {
          read: false,
        },
      });
      return { contact };
    },
  })
  .mutation('set-read-false', {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const contact = await prisma.contact.update({
        where: {
          id: input.id,
        },
        data: {
          read: true,
        },
      });
      return { contact };
    },
  });
