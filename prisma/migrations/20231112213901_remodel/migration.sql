/*
  Warnings:

  - You are about to drop the column `genre` on the `Book` table. All the data in the column will be lost.
  - Added the required column `genreId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "genre",
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Genre";

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "genre" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
