/*
DROP TABLE IF EXISTS AccessClaim;
DROP TABLE IF EXISTS AppUser;
DROP TABLE IF EXISTS Logs.LogEvents;
DROP TABLE IF EXISTS __EFMigrationsHistory;
*/

/*
DELETE FROM AccessClaim;
DELETE FROM AppUser;
DELETE FROM Logs.LogEvents;
*/


SELECT * FROM AppUser;
SELECT * FROM AccessClaim;


INSERT INTO AppUser
(Id, ExtId, FirstName, LastName, Email, IsEnabled)
VALUES
(NEWID(), '123', 'Andy', 'Smith', 'asmith88@outlook.com', 1)