//------------------------------------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Dyvenix.Core.ApiClients;
using Dyvenix.Core.Entities;
using Dyvenix.App1.Common.Queries;
using Dyvenix.App1.Common.Entities;
using Dyvenix.App1.Server.DTOs;

namespace Dyvenix.App1.Common.ApiClients;

public interface IAppUserApiClient
{
	Task<Guid> CreateAppUser(AppUser appUser);
	Task UpdateAppUser(AppUser appUser);
	Task DeleteAppUser(Guid id);
	Task UpdateEmail(UpdateEmailReq request);
	Task UpdateUserType(UpdateUserTypeReq request);
	Task UpdateGroupCode(UpdateGroupCodeReq request);
	Task UpdateName(UpdateNameReq request);
	Task<AppUser> GetById(Guid id);
	Task<AppUser> GetByIdwClaims(Guid id);
	Task<List<AppUser>> GetAll();
	Task<List<AppUser>> ReadMethod1(UserType userType);
}
public class AppUserApiClient : ApiClientBase<AppUser>, IAppUserApiClient
{
    public AppUserApiClient(HttpClient httpClient)
        : base(httpClient)
    {
    }

	#region Create / Update / Delete

	public async Task<Guid> CreateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		return await PostAsync<Guid>("api/v1/AppUser/CreateAppUser", appUser);
	}

	public async Task UpdateAppUser(AppUser appUser)
	{
		ArgumentNullException.ThrowIfNull(appUser);

		await PostAsync<AppUser>("api/v1/AppUser/UpdateAppUser", appUser);
	}

	public async Task DeleteAppUser(Guid id)
	{
		if (id == Guid.Empty)
			throw new ArgumentNullException(nameof(id));
		await PostAsync<string>($"api/v1/AppUser/DeleteAppUser/{id}", null);
	}

	#endregion

	#region Update Methods

	public async Task UpdateEmail(UpdateEmailReq request)
	{
		await PatchAsync<Task>($"api/v1/AppUser/UpdateEmail", request);
	}

	public async Task UpdateUserType(UpdateUserTypeReq request)
	{
		await PatchAsync<Task>($"api/v1/AppUser/UpdateUserType", request);
	}

	public async Task UpdateGroupCode(UpdateGroupCodeReq request)
	{
		await PatchAsync<Task>($"api/v1/AppUser/UpdateGroupCode", request);
	}

	public async Task UpdateName(UpdateNameReq request)
	{
		await PatchAsync<Task>($"api/v1/AppUser/UpdateName", request);
	}

	#endregion

	#region Single Methods

	public async Task<AppUser> GetById(Guid id)
	{
		return await GetAsync<AppUser>($"api/v1/AppUser/GetById/{id}");
	}

	public async Task<AppUser> GetByIdwClaims(Guid id)
	{
		return await GetAsync<AppUser>($"api/v1/AppUser/GetByIdwClaims/{id}");
	}

	#endregion

	#region List Methods

	public async Task<List<AppUser>> GetAll()
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/GetAll");
	}

	public async Task<List<AppUser>> ReadMethod1(UserType userType)
	{
		return await GetAsync<List<AppUser>>($"api/v1/AppUser/ReadMethod1/{userType}");
	}

	#endregion


}
