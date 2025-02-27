USE [Dyvenix]
GO
/****** Object:  User [dyvenix_app]    Script Date: 2/26/2025 10:50:49 AM ******/
CREATE USER [dyvenix_app] FOR LOGIN [dyvenix_app] WITH DEFAULT_SCHEMA=[Logs]
GO
/****** Object:  User [SerilogUser]    Script Date: 2/26/2025 10:50:49 AM ******/
CREATE USER [SerilogUser] FOR LOGIN [SerilogUser] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Schema [Logs]    Script Date: 2/26/2025 10:50:49 AM ******/
CREATE SCHEMA [Logs]
GO
/****** Object:  Table [dbo].[AccessClaim]    Script Date: 2/26/2025 10:50:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccessClaim](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[AppUserId] [uniqueidentifier] NOT NULL,
	[ClaimName] [nvarchar](100) NOT NULL,
	[ClaimValue] [nvarchar](100) NULL,
 CONSTRAINT [PK_AccessClaim] PRIMARY KEY NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AppUser]    Script Date: 2/26/2025 10:50:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppUser](
	[Id] [uniqueidentifier] NOT NULL,
	[Identityid] [nvarchar](100) NOT NULL,
	[FirstName] [nvarchar](50) NOT NULL,
	[LastName] [nchar](50) NOT NULL,
	[Email] [nvarchar](200) NULL,
 CONSTRAINT [PK_AppUser] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [Logs].[LogEvents]    Script Date: 2/26/2025 10:50:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Logs].[LogEvents](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TimeStampUTC] [datetime] NULL,
	[LogLevel] [int] NULL,
	[Application] [nvarchar](200) NULL,
	[Source] [nvarchar](200) NULL,
	[Message] [nvarchar](max) NULL,
	[CorrelationId] [nvarchar](50) NULL,
	[Exception] [nvarchar](max) NULL,
PRIMARY KEY NONCLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccessClaim]  WITH CHECK ADD  CONSTRAINT [FK_AccessClaim_AppUserId] FOREIGN KEY([AppUserId])
REFERENCES [dbo].[AppUser] ([Id])
GO
ALTER TABLE [dbo].[AccessClaim] CHECK CONSTRAINT [FK_AccessClaim_AppUserId]
GO
ALTER TABLE [dbo].[AppUser]  WITH CHECK ADD  CONSTRAINT [FK_AppUser_AppUser] FOREIGN KEY([Id])
REFERENCES [dbo].[AppUser] ([Id])
GO
ALTER TABLE [dbo].[AppUser] CHECK CONSTRAINT [FK_AppUser_AppUser]
GO
