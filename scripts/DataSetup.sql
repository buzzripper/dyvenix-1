-- Clear
DELETE FROM AccessClaim;
DELETE FROM AppUser;
DELETE FROM Logs.LogEvents;

INSERT INTO AppUser (Id, ExtId, FirstName, LastName, Email, IsEnabled)
SELECT 
    NEWID(),  -- Generate a new unique identifier for each row
    'EXT' + CAST((number % 10) AS NVARCHAR), 
    'First' + CAST((number % 5) AS NVARCHAR), 
    'Last' + CAST((number % 2) AS NVARCHAR), 
    'user' + CAST(number AS NVARCHAR) + '@example.com',
    CASE WHEN number % 2 = 0 THEN 1 ELSE 0 END  -- Alternate IsEnabled values
FROM master.dbo.spt_values
WHERE type = 'P' AND number BETWEEN 1 AND 30
