/*
  Warnings:

  - You are about to drop the `_ProductTocategorie` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categorie` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ProductTocategorie_B_index";

-- DropIndex
DROP INDEX "_ProductTocategorie_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductTocategorie";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "imgUrl" TEXT,
    "categorie" TEXT NOT NULL,
    CONSTRAINT "Product_categorie_fkey" FOREIGN KEY ("categorie") REFERENCES "categorie" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("description", "id", "imgUrl", "name", "price") SELECT "description", "id", "imgUrl", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
