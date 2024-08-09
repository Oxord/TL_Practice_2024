/*Найдите всех клиентов, чьи фамилии начинаются с буквы "S".*/

USE HotelManagement;

SELECT * FROM dbo.customers c WHERE LEFT(c.last_name, 1) = 'S';