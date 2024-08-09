/*Найдите все бронирования для определенного клиента (по имени или электронному адресу).*/

USE HotelManagement;

DECLARE @userName NVARCHAR(20) = 'ilya';

SELECT room_id, check_in_date, check_out_date FROM dbo.customers c INNER JOIN dbo.bookings b ON c.customer_id = b.customer_id 
WHERE c.first_name = @userName;