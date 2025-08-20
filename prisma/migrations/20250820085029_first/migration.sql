-- CreateEnum
CREATE TYPE "public"."EstablishmentType" AS ENUM ('RESTAURANT', 'BAR', 'MAQUIS', 'LUANGE');

-- CreateEnum
CREATE TYPE "public"."EstablishmentEmployees" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateTable
CREATE TABLE "public"."Waitlist" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "establishmentName" TEXT NOT NULL,
    "establishmentType" "public"."EstablishmentType" NOT NULL,
    "establishmentLocation" TEXT NOT NULL,
    "establishmentEmployees" "public"."EstablishmentEmployees" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Waitlist_email_key" ON "public"."Waitlist"("email");
