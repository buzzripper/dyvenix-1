//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/2/2025 9:33 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
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
	Task<List<AppUser>> GetEnabledByCompany(bool isEnabled, string companyId);
	Task<List<AppUser>> GetByLastNameWithClaims(string lastName);
	Task<List<AppUser>> QueryByCompanySorted(string extId, string companyId);
	Task<List<AppUser>> QueryByCompanySortedPaging(string extId, string companyId, int pageSize, int pageOffset);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset);
	Task<List<AppUser>> GetByCompany(string email, bool isEnabled, string companyId);
	Task<List<AppUser>> GetByCompanyWithPaging(string companyId, int pageSize, int pageOffset);
	Task<EntityList<AppUser>>QueryByCompanySorted(QueryByCompanySortedQuery query);
	Task<EntityList<AppUser>>QueryByCompanySortedPaging(QueryByCompanySortedPagingQuery query);
}
public class AppUserApiClient : ApiClientBase<AppUser>, IAppUserApiClient
{
    public AppUserApiClient(HttpClient httpClient)
        : base(httpClient)
    {
    }

	#region Create / Update / Delete

	public async Task<AppUser> CreateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		return await PostAsync<AppUser>("api/v1/AppUser/CreateAppUser", appUser);
	}

	public async Task UpdateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		await PostAsync<AppUser>("api/v1/AppUser/UpdateAppUser", appUser);
	}

	public async Task DeleteAppUser(Guid id)
	{
		await PostAsync<string>($"api/v1/AppUser/DeleteAppUser/{id}", null);
	}

	#endregion

	#region Single Methods

	public async Task<AppUser> GetById(Guid id)
	{
		return await GetAsync<AppUser>($"api/v1/AppUser/GetById/{id}");
	}

	#endregion

	#region List Methods

	public async Task<List<AppUser>> GetByExtId(string extId, string lastName)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetByExtId/{extId}/{lastName}");
	}

	public async Task<List<AppUser>> GetEnabledByCompany(bool isEnabled, string companyId)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetEnabledByCompany/{isEnabled}/{companyId}");
	}

	public async Task<List<AppUser>> GetByLastNameWithClaims(string lastName)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetByLastNameWithClaims/{lastName}");
	}

	public async Task<List<AppUser>> QueryByCompanySorted(string extId, string companyId)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/QueryByCompanySorted/{extId}/{companyId}");
	}

	public async Task<List<AppUser>> QueryByCompanySortedPaging(string extId, string companyId, int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/QueryByCompanySortedPaging/{extId}/{companyId}/{pageSize}/{pageOffset}");
	}

	public async Task<List<AppUser>> GetAll()
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetAll");
	}

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetAllWithPaging/{pageSize}/{pageOffset}");
	}

	public async Task<List<AppUser>> GetByCompany(string email, bool isEnabled, string companyId)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetByCompany/{email}/{isEnabled}/{companyId}");
	}

	public async Task<List<AppUser>> GetByCompanyWithPaging(string companyId, int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetByCompanyWithPaging/{companyId}/{pageSize}/{pageOffset}");
	}

	#endregion

	#region Queries

	public async Task<EntityList<AppUser>>QueryByCompanySorted(QueryByCompanySortedQuery query)
	{
		ArgumentNullException.ThrowIfNull(query);

		return await PostAsync<EntityList<AppUser>>("api/v1/AppUser/QueryByCompanySorted", query);
	}

	public async Task<EntityList<AppUser>>QueryByCompanySortedPaging(QueryByCompanySortedPagingQuery query)
	{
		ArgumentNullException.ThrowIfNull(query);

		return await PostAsync<EntityList<AppUser>>("api/v1/AppUser/QueryByCompanySortedPaging", query);
	}
	#endregion

}
