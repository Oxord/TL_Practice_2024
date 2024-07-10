IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='customers')
	CREATE TABLE dbo.customers(
		customer_id	INT IDENTITY(1,1) NOT NULL,
		first_name NVARCHAR(15) NOT NULL,
		last_name NVARCHAR(20) NOT NULL,
		email VARCHAR(60) NOT  NULL,
		phone_number VARCHAR(20) NOT  NULL,
		CONSTRAINT PK_customers_customer_id PRIMARY KEY (customer_id)
	)