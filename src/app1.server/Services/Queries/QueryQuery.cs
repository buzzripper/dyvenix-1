//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/26/2025 10:17 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Dyvenix.Core.Queries;
using System;
namespace Dyvenix.App1.Server.Services.Queries;

public class QueryQuery : IPagingQuery, ISortingQuery
{
	public int RowOffset { get; set; }
	public int PageSize { get; set; }
	public bool RecalcRowCount { get; set; }
	public bool GetRowCountOnly { get; set; }
	public string SortBy { get; set; }
	public bool SortDesc { get; set; }

	public bool? IsEnabled { get; set; }

}
