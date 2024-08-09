USE HotelManagement;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='bookings')
	CREATE TABLE dbo.bookings(
		booking_id	INT IDENTITY(1,1) NOT NULL,
		customer_id	INT FOREIGN KEY REFERENCES dbo.customers(customer_id) NOT NULL,
		room_id INT FOREIGN KEY REFERENCES dbo.rooms(room_id) NOT NULL,
		check_in_date DATE NOT NULL,
		check_out_date DATE NOT NULL,
		CONSTRAINT PK_bookings_booking_id PRIMARY KEY (booking_id),
	)