USE HotelManagement;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='roomsToFacilities')
	CREATE TABLE dbo.roomsToFacilities(
		room_id INT FOREIGN KEY REFERENCES dbo.rooms(room_id),
		facility_id INT FOREIGN KEY REFERENCES dbo.facilities(facility_id) NOT NULL
	)