CREATE TABLE customer (
	custid CHAR(10) PRIMARY KEY NOT NULL,
	custname VARCHAR(10) NOT NULL,
	addr CHAR(10) NOT NULL,
	phone CHAR(11),
    birth DATE
);

DESC customer;