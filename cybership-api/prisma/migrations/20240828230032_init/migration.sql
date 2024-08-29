-- CreateTable
CREATE TABLE "Fulfillment" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fulfillment_pkey" PRIMARY KEY ("id")
);
