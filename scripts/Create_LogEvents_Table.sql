USE [Dyvenix]
GO

/****** Object:  Table [Logs].[LogEvents]    Script Date: 3/3/2025 9:33:19 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Logs].[LogEvents](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Message] [nvarchar](max) NULL,
	[Timestamp] [datetime] NULL,
	[Exception] [nvarchar](max) NULL,
	[LogLevel] [int] NULL,
	[Application] [nvarchar](200) NULL,
	[Source] [nvarchar](200) NULL,
	[CorrelationId] [nvarchar](50) NULL,
 CONSTRAINT [PK_LogEvents] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


