/*Найдите все номера, которые не забронированы на определенную дату.*/

USE HotelManagement;

DECLARE @date DATE = '2024-7-15';

SELECT DISTINCT room_number, room_type, price_per_night FROM dbo.rooms r LEFT JOIN dbo.bookings b ON r.room_id = b.room_id 
	WHERE (@date < b.check_in_date) OR (@date > b.check_out_date);