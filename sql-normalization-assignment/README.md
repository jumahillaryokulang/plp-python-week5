# SQL Migrations and Normalization Assignment

This assignment records the cardinal rule for database migrations and provides SQL statements demonstrating First Normal Form (1NF) and Second Normal Form (2NF).

## Files

- **`answer.sql`** — Migration best-practice answer, a 1NF product/order table with one product per row, and a 2NF decomposition into order headers and order items with primary and foreign keys.

## Answers and design notes

- **Migration cardinal rule:** Never modify a migration that has already been applied; create a new migration instead.
- **1NF:** `ProductDetail_1NF` stores one product per row. `(OrderID, Product)` is the primary key, allowing one order to contain multiple products while keeping each product field atomic.
- **2NF:** `CustomerName` depends only on `OrderID`, which is part of the original composite key, so it is stored in `Orders_2NF`. `OrderItems_2NF` stores `Product` and `Quantity` for each order, keyed by `(OrderID, Product)` and linked to its order with a foreign key.

Run `answer.sql` in a MySQL database where these table names are available. The `_2NF` suffix avoids conflicts with pre-existing tables named `Orders` or `OrderItems`.
