-- IF NOT EXISTS (SELECT name FROM sys.schemas WHERE name = N'dyvenix_logs')
-- BEGIN
    
-- END

CREATE SCHEMA [dyvenix_logs];
GO

PRINT 'Created the DB schema'

CREATE LOGIN [dyvenix_app] WITH PASSWORD = 'pwd';
CREATE USER [dyvenix_app] FOR LOGIN [dyvenix_app] WITH DEFAULT_SCHEMA = dyvenix_logs;

IF  NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dyvenix_logs].[Logs]') AND type in (N'U'))
BEGIN
    CREATE TABLE  dyvenix_logs.Logs (
        [TimeStamp] datetime NULL,
        [Level] nvarchar(12) NULL,
        [Message] nvarchar(max) NULL,
        [MessageTemplate] nvarchar(max) NULL,
        [Exception] nvarchar(max) NULL,
        [Properties] nvarchar(max) NULL
    );
END

IF NOT EXISTS(SELECT * FROM sys.indexes WHERE name = 'IX_Logs_TimeStamp' AND object_id = OBJECT_ID('dyvenix_logs.Logs'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_Logs_TimeStamp ON dyvenix_logs.Logs (TimeStamp);
END

GRANT SELECT ON dyvenix_logs.Logs TO dyvenix_app;
GRANT INSERT ON dyvenix_logs.Logs TO dyvenix_app;

