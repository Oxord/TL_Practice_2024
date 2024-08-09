USE HotelManagement;

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='facilities')
	CREATE TABLE dbo.facilities(
		facility_id INT IDENTITY(1,1) NOT NULL,
		facility_name NVARCHAR(20) NOT NULL,
		CONSTRAINT PK_facilities_facility_id PRIMARY KEY(facility_id)
	)