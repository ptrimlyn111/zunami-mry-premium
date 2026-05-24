-- Initial PostgreSQL migration for Zunami Mry
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');
CREATE TYPE "PaymentStatus" AS ENUM ('UNPAID', 'PENDING', 'PAID', 'FAILED', 'REFUNDED');
CREATE TYPE "ServiceCategory" AS ENUM ('TRADITIONAL_DANCE', 'MODERN_DANCE', 'MAKEUP_ARTIST', 'DANCE_ACADEMY');

CREATE TABLE "User" ("id" TEXT NOT NULL, "name" TEXT, "email" TEXT NOT NULL, "password" TEXT NOT NULL, "role" "Role" NOT NULL DEFAULT 'USER', "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "User_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "Booking" ("id" TEXT NOT NULL, "orderId" TEXT NOT NULL, "customerName" TEXT NOT NULL, "whatsapp" TEXT NOT NULL, "service" TEXT NOT NULL, "eventDate" TIMESTAMP(3) NOT NULL, "location" TEXT NOT NULL, "notes" TEXT, "status" "BookingStatus" NOT NULL DEFAULT 'PENDING', "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "Booking_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "Booking_orderId_key" ON "Booking"("orderId");
CREATE TABLE "Service" ("id" TEXT NOT NULL, "title" TEXT NOT NULL, "description" TEXT NOT NULL, "price" INTEGER NOT NULL, "image" TEXT NOT NULL, "category" "ServiceCategory" NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updatedAt" TIMESTAMP(3) NOT NULL, CONSTRAINT "Service_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Class" ("id" TEXT NOT NULL, "title" TEXT NOT NULL, "schedule" TEXT NOT NULL, "level" TEXT NOT NULL, "quota" INTEGER NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "Class_pkey" PRIMARY KEY ("id"));
CREATE TABLE "Payment" ("id" TEXT NOT NULL, "bookingId" TEXT NOT NULL, "amount" INTEGER NOT NULL, "status" "PaymentStatus" NOT NULL DEFAULT 'UNPAID', "paymentMethod" TEXT, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "Payment_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "Payment_bookingId_key" ON "Payment"("bookingId");
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "Account" ("id" TEXT NOT NULL, "userId" TEXT NOT NULL, "type" TEXT NOT NULL, "provider" TEXT NOT NULL, "providerAccountId" TEXT NOT NULL, "refresh_token" TEXT, "access_token" TEXT, "expires_at" INTEGER, "token_type" TEXT, "scope" TEXT, "id_token" TEXT, "session_state" TEXT, CONSTRAINT "Account_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE TABLE "Session" ("id" TEXT NOT NULL, "sessionToken" TEXT NOT NULL, "userId" TEXT NOT NULL, "expires" TIMESTAMP(3) NOT NULL, CONSTRAINT "Session_pkey" PRIMARY KEY ("id"));
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
CREATE TABLE "VerificationToken" ("identifier" TEXT NOT NULL, "token" TEXT NOT NULL, "expires" TIMESTAMP(3) NOT NULL);
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
