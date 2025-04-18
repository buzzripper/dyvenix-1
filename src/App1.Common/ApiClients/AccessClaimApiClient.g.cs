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

public interface IAccessClaimApiClient
{
	Task<Guid> CreateAccessClaim(AccessClaim accessClaim);
	Task<bool> DeleteAccessClaim(Guid id);
	Task UpdateAccessClaim(AccessClaim accessClaim);
	Task UpdateClaimName(UpdateClaimNameReq request);
}
public class AccessClaimApiClient : ApiClientBase<AccessClaim>, IAccessClaimApiClient
{
    public AccessClaimApiClient(HttpClient httpClient)
        : base(httpClient)
    {
    }

	#region Create

	public async Task<Guid> CreateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		return await PostAsync<Guid>("api/v1/AccessClaim/CreateAccessClaim", accessClaim);
	}

	#endregion

	#region Delete

	public async Task<bool> DeleteAccessClaim(Guid id)
	{
		if (id == Guid.Empty)
			throw new ArgumentNullException(nameof(id));
		return await PostAsync<bool>($"api/v1/AccessClaim/DeleteAccessClaim/{id}", null);
	}

	#endregion

	#region Update

	public async Task UpdateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		await PostAsync<AccessClaim>("api/v1/AccessClaim/UpdateAccessClaim", accessClaim);
	}

	public async Task UpdateClaimName(UpdateClaimNameReq request)
	{
		await PatchAsync<Task>($"api/v1/AccessClaim/UpdateClaimName", request);
	}

	#endregion




}
