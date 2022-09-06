/*
  Warnings:

  - Added the required column `zerozero_alias` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "read" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "MembershipSubmission" ADD COLUMN     "handled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "zerozero_alias" TEXT NOT NULL;
