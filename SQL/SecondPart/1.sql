USE HotelManagement;

DECLARE @todayDate DATE = GETDATE();

SELECT DISTINCT room_number, room_type, price_per_night FROM dbo.rooms r LEFT JOIN dbo.bookings b ON r.room_id = b.room_id 
	WHERE (@todayDate < b.check_in_date) OR (@todayDate > b.check_out_date);