//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/30/2025 10:36 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Dyvenix.Core.ApiClients;
using Dyvenix.Core.Entities;
using Dyvenix.App1.Server.Services.Queries;
using Dyvenix.App1.Common.Entities;

namespace Dyvenix.App1.Common.ApiClients;

public interface IAppUserApiClient
{
	Task<AppUser> CreateAppUser(AppUser appUser);
	Task UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task<AppUser> GetById(Guid id);
	Task<List<AppUser>> GetByExtId(string extId, string lastName);
	Task<List<AppUser>> GetByFirstName(string firstName);
	Task<List<AppUser>> GetByLastNameWithClaims(string lastName);
	Task<List<AppUser>> GetByExtId(string extId, string lastName, bool isEnabled);
	Task<List<AppUser>> QueryByExtIdSorted(string extId);
	Task<List<AppUser>> QueryByExtIdPaging(string extId, int pageSize, int pageOffset);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset);
	Task<List<AppUser>> GetForCoEnabled(string email, bool isEnabled, string companyId);
	Task<EntityList<AppUser>>QueryByExtIdSorted(QueryByExtIdSortedQuery query);
	Task<EntityList<AppUser>>QueryByExtIdPaging(QueryByExtIdPagingQuery query);
}
public class AppUserApiClient : ApiClientBase<AppUser>, IAppUserApiClient
{
    public AppUserApiClient(string baseUrl, IHttpClientFactory httpClientFactory, IHttpContextAccessor httpContextAccessor)
        : base(baseUrl, httpClientFactory, httpContextAccessor)
    {
    }

	#region Create/Update/Delete
	#region Create / Update / Delete

	public async Task<AppUser> CreateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		return await PostAsync<AppUser>("v1/AppUser/CreateAppUser", appUser);
	}

	public async Task UpdateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		await PostAsync<AppUser>("v1/AppUser/UpdateAppUser", appUser);
	}

	public async Task DeleteAppUser(Guid id)
	{
		await PostAsync<string>($"v1/AppUser/DeleteAppUser/{id}", null);
	}

	#endregion

	#endregion

	#region Single Methods

	public async Task<AppUser> GetById(Guid id)
	{
		return await GetAsync<AppUser>($"v1/AppUser/GetById/{id}");
	}

	#endregion

	#region List Methods

	public async Task<List<AppUser>> GetByExtId(string extId, string lastName)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetByExtId/{extId}, /{lastName}");
	}

	public async Task<List<AppUser>> GetByFirstName(string firstName)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetByFirstName/{firstName}");
	}

	public async Task<List<AppUser>> GetByLastNameWithClaims(string lastName)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetByLastNameWithClaims/{lastName}");
	}

	public async Task<List<AppUser>> GetByExtId(string extId, string lastName, bool isEnabled)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetByExtId/{extId}, /{lastName}, /{isEnabled}");
	}

	public async Task<List<AppUser>> QueryByExtIdSorted(string extId)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/QueryByExtIdSorted/{extId}");
	}

	public async Task<List<AppUser>> QueryByExtIdPaging(string extId, int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/QueryByExtIdPaging/{extId}, /{{pageSize}}/{{pageOffset}}");
	}

	public async Task<List<AppUser>> GetAll()
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetAll");
	}

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetAllWithPaging/{{pageSize}}/{{pageOffset}}");
	}

	public async Task<List<AppUser>> GetForCoEnabled(string email, bool isEnabled, string companyId)
	{
		return await GetAsync<List<AppUser>>($"v1/AppUser/GetForCoEnabled/{email}, /{isEnabled}, /{companyId}");
	}

	#endregion

	#region Queries

	public async Task<EntityList<AppUser>>QueryByExtIdSorted(QueryByExtIdSortedQuery query)
	{
		ArgumentNullException.ThrowIfNull(query);

		return await PostAsync<EntityList<AppUser>>("v1/AppUser/QueryByExtIdSorted", query);
	}

	public async Task<EntityList<AppUser>>QueryByExtIdPaging(QueryByExtIdPagingQuery query)
	{
		ArgumentNullException.ThrowIfNull(query);

		return await PostAsync<EntityList<AppUser>>("v1/AppUser/QueryByExtIdPaging", query);
	}
	#endregion

}
