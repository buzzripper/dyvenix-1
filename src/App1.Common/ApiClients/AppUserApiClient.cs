//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/4/2025 4:11 PM. Any changes made to it will be lost.
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
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset);
	Task<List<AppUser>> GetEnabledByCompany(bool isEnabled, string companyId);
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

	public async Task<List<AppUser>> GetAll()
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetAll");
	}

	public async Task<List<AppUser>> GetAllWithPaging(int pageSize, int pageOffset)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetAllWithPaging/{pageSize}/{pageOffset}");
	}

	public async Task<List<AppUser>> GetEnabledByCompany(bool isEnabled, string companyId)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetEnabledByCompany/{isEnabled}/{companyId}");
	}

	#endregion


}
