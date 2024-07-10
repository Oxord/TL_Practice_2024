USE HotelManagement;

DECLARE @roomNumber INT = 4;

SELECT customer_id, room_number, room_type, check_in_date, check_out_date FROM dbo.rooms r INNER JOIN dbo.bookings b ON r.room_id = b.room_id 
WHERE r.room_number = @roomNumber;