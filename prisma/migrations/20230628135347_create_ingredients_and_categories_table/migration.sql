-- CreateTable
CREATE TABLE "ingredient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUlr" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categorie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProductToingredient" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProductToingredient_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductToingredient_B_fkey" FOREIGN KEY ("B") REFERENCES "ingredient" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ProductTocategorie" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ProductTocategorie_A_fkey" FOREIGN KEY ("A") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductTocategorie_B_fkey" FOREIGN KEY ("B") REFERENCES "categorie" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredient_name_key" ON "ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categorie_name_key" ON "categorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToingredient_AB_unique" ON "_ProductToingredient"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToingredient_B_index" ON "_ProductToingredient"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductTocategorie_AB_unique" ON "_ProductTocategorie"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductTocategorie_B_index" ON "_ProductTocategorie"("B");
