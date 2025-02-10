-- IF NOT EXISTS (SELECT name FROM sys.schemas WHERE name = N'dyvenix_logs')
-- BEGIN
    
-- END

CREATE SCHEMA [dyvenix_logs];
GO

PRINT 'Created the DB schema'

CREATE LOGIN [dyvenix_app] WITH PASSWORD = 'pwd';
CREATE USER [dyvenix_app] FOR LOGIN [dyvenix_app] WITH DEFAULT_SCHEMA = dyvenix_logs;

IF  NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dyvenix_logs].[LogEvents2]') AND type in (N'U'))
BEGIN
    CREATE TABLE [dyvenix_logs].[LogEvents2]
    (
        [Message] [nvarchar](max) NULL,
        [Level] [nvarchar](12) NULL,
        [TimeStampUTC] [datetime] NULL,
        [MachineName] [nvarchar](100) NULL,
        [Source] [nvarchar](200) NULL,
        [Exception] [nvarchar](max) NULL
    )
END

IF NOT EXISTS(SELECT * FROM sys.indexes WHERE name = 'IX_LogEvents2_TimeStamp' AND object_id = OBJECT_ID('dyvenix_logs.LogEvents2'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_LogEvents2_TimeStamp ON dyvenix_logs.LogEvents2 (TimeStamp);
END

IF NOT EXISTS(SELECT * FROM sys.indexes WHERE name = 'IX_LogEvents2_MachineName' AND object_id = OBJECT_ID('dyvenix_logs.LogEvents2'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_LogEvents2_MachineName ON dyvenix_logs.LogEvents2 (MachineName);
END

IF NOT EXISTS(SELECT * FROM sys.indexes WHERE name = 'IX_LogEvents2_Source' AND object_id = OBJECT_ID('dyvenix_logs.LogEvents2'))
BEGIN
    CREATE NONCLUSTERED INDEX IX_LogEvents2_Source ON dyvenix_logs.LogEvents2 (Source);
END

GRANT SELECT ON dyvenix_logs.LogEvents2 TO dyvenix_app;
GRANT INSERT ON dyvenix_logs.LogEvents2 TO dyvenix_app;

