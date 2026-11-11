-- Cardinal rule of database migrations:
-- Never modify a migration that has already been applied; create a new migration instead.

-- Question 1: Transform ProductDetail into First Normal Form (1NF).
-- Each row contains exactly one product value. The composite primary key
-- allows multiple distinct products for the same order.
CREATE TABLE ProductDetail_1NF (
    OrderID INT NOT NULL,
    CustomerName VARCHAR(100) NOT NULL,
    Product VARCHAR(100) NOT NULL,
    PRIMARY KEY (OrderID, Product)
);

INSERT INTO ProductDetail_1NF (OrderID, CustomerName, Product)
VALUES
    (101, 'John Doe', 'Laptop'),
    (101, 'John Doe', 'Mouse'),
    (102, 'Jane Smith', 'Tablet'),
    (102, 'Jane Smith', 'Keyboard'),
    (102, 'Jane Smith', 'Mouse'),
    (103, 'Emily Clark', 'Phone');

-- Question 2: Transform the 1NF OrderDetails data into Second Normal Form (2NF).
-- CustomerName depends on OrderID alone, not on the full (OrderID, Product) key.
-- Store that order-level attribute in Orders; store each product and quantity
-- in OrderItems, whose composite key is (OrderID, Product).
CREATE TABLE Orders_2NF (
    OrderID INT NOT NULL PRIMARY KEY,
    CustomerName VARCHAR(100) NOT NULL
);

CREATE TABLE OrderItems_2NF (
    OrderID INT NOT NULL,
    Product VARCHAR(100) NOT NULL,
    Quantity INT NOT NULL,
    PRIMARY KEY (OrderID, Product),
    CONSTRAINT fk_orderitems_2nf_order
        FOREIGN KEY (OrderID) REFERENCES Orders_2NF (OrderID)
);

INSERT INTO Orders_2NF (OrderID, CustomerName)
VALUES
    (101, 'John Doe'),
    (102, 'Jane Smith'),
    (103, 'Emily Clark');

INSERT INTO OrderItems_2NF (OrderID, Product, Quantity)
VALUES
    (101, 'Laptop', 2),
    (101, 'Mouse', 1),
    (102, 'Tablet', 3),
    (102, 'Keyboard', 1),
    (102, 'Mouse', 2),
    (103, 'Phone', 1);
