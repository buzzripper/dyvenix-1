//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/26/2025 7:00 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using Dyvenix.Core.Queries;

namespace Dyvenix.App1.Server.Services.Queries;

public class QueryDisabledUsersQuery : ISortingQuery
{
	public string SortBy { get; set; }
	public bool SortDesc { get; set; }


	public string LastName { get; set; }
	public bool? IsEnabled { get; set; }

}
