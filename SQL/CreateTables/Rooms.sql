IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='rooms')
	CREATE TABLE dbo.rooms (

		room_id INT IDENTITY(1,1) NOT NULL, 
		room_number INT NOT NULL,
		room_type NVARCHAR(15) NOT NULL,
		price_per_night DECIMAL NOT NULL,
		availability BIT NOT NULL,

		CONSTRAINT PK_rooms_room_id PRIMARY KEY (room_id)

	)