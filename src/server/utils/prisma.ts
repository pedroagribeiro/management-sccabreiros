import { PrismaClient } from '@prisma/client';

// Declares the prisma singleton instance
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['query'] });
