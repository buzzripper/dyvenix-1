
DROP TABLE IF EXISTS dbo.__EFMigrationsHistory;
DROP TABLE IF EXISTS dbo.AccessClaim;
DROP TABLE IF EXISTS dbo.AppUser;
DROP TABLE IF EXISTS Logs.LogEvents;



INSERT INTO AppUser
(Id, ExtId, FirstName, LastName, Email, IsEnabled)
VALUES
(NEWID(), '123', 'Andy', 'Smith', 'asmith88@outlook.com', 1)