USE HotelManagement;

INSERT INTO dbo.rooms(room_number, room_type, price_per_night, availability) 
VALUES
	(11, 'Double', 1300.0, 1),
	(5, 'Single', 600.0, 1),
	(4, 'Triple', 2000.0, 1),
	(2, 'Double', 1300.0, 0);