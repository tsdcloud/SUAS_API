/*
  Warnings:

  - A unique constraint covering the columns `[photo]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_photo_key" ON "User"("photo");
