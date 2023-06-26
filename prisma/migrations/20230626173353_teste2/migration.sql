-- CreateTable
CREATE TABLE "OrderList" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "OrderList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "orderListId" INTEGER,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_productName_fkey" FOREIGN KEY ("productName") REFERENCES "Product" ("name") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_orderListId_fkey" FOREIGN KEY ("orderListId") REFERENCES "OrderList" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("count", "id", "price", "productName", "userId") SELECT "count", "id", "price", "productName", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
