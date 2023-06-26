/*
  Warnings:

  - You are about to drop the `OrderList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `orderListId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OrderList";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "productName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_productName_fkey" FOREIGN KEY ("productName") REFERENCES "Product" ("name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("count", "id", "productName", "userId") SELECT "count", "id", "productName", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
