import * as trpc from '@trpc/server';
import { contactRouter } from './contact';
import { membershipRouter } from './membership';
import { sessionRouter } from './session';

export const appRouter = trpc
  .router()
  .merge('contact.', contactRouter)
  .merge('membership.', membershipRouter)
  .merge('session.', sessionRouter);

export type AppRouter = typeof appRouter;
