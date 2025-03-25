//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/24/2025 10:02 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Dyvenix.Core.Queries;

namespace Dyvenix.App1.Server.Services.Queries;

public class FindCompanyUsersQuery : IPagingQuery, ISortingQuery
{
	public int RowOffset { get; set; }
	public int PageSize { get; set; }
	public bool RecalcRowCount { get; set; }
	public bool GetRowCountOnly { get; set; }
	public string SortBy { get; set; }
	public bool SortDesc { get; set; }

	public string ExtId { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string Email { get; set; }
	public bool IsEnabled { get; set; }

}
