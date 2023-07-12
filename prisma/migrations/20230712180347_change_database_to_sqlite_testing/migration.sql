-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "imgUrl" TEXT,
    "categorie" TEXT DEFAULT 'Prato principal',
    CONSTRAINT "Product_categorie_fkey" FOREIGN KEY ("categorie") REFERENCES "categorie" ("name") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "productPrice" DECIMAL NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT DEFAULT 'Pendente',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Order_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_product_fkey" FOREIGN KEY ("product") REFERENCES "Product" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ingredient_name_key" ON "ingredient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categorie_name_key" ON "categorie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToingredient_AB_unique" ON "_ProductToingredient"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToingredient_B_index" ON "_ProductToingredient"("B");
