-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "imgUrl" TEXT,
    "categorie" TEXT DEFAULT 'Prato principal',
    CONSTRAINT "Product_categorie_fkey" FOREIGN KEY ("categorie") REFERENCES "categorie" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categorie", "description", "id", "imgUrl", "name", "price") SELECT "categorie", "description", "id", "imgUrl", "name", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
