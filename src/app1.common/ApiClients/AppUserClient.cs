using Dyvenix.App1.Common.Entities;
using Dyvenix.Core.ApiClients;
using Dyvenix.Core.DTOs;
using Dyvenix.Logging;
using Microsoft.AspNetCore.Http;
using System.Net.Http;
using System.Threading.Tasks;

namespace Dyvenix.App1.Common.ApiClients;

public interface IAppUserClient
{
	Task<ServiceResponse> CreateAppUser(AppUser appUser);
}

public class AppUserClient : ApiClientBase<AppUserClient>, IAppUserClient
{
	public AppUserClient(IHttpClientFactory httpClientFactory, string baseUrl, IHttpContextAccessor httpContextAccessor, IDyvenixLogger<AppUserClient> logger)
		: base(httpClientFactory, baseUrl, httpContextAccessor, logger)
	{
	}

	public async Task<ServiceResponse> CreateAppUser(AppUser appUser)
	{
		return await PostAsync<ServiceResponse>("v1/AppUser/CreateAppUser", appUser);
	}
}
