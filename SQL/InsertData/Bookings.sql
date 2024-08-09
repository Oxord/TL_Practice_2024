USE HotelManagement;

INSERT INTO dbo.bookings(customer_id, room_id, check_in_date, check_out_date) 
VALUES
	(1, 2, '2024-7-11', '2024-7-16'),
	(2, 3, '2024-7-21', '2024-8-2'),
	(3, 1, '2024-8-1',  '2024-8-11'),
	(4, 3, '2024-10-8', '2024-10-26'),
	(1, 4, '2024-7-7', '2024-8-2');