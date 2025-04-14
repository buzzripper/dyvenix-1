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

namespace Dyvenix.App1.Common.ApiClients;

public interface IAccessClaimApiClient
{
	Task<Guid> CreateAccessClaim(AccessClaim accessClaim);
	Task UpdateAccessClaim(AccessClaim accessClaim);
	Task DeleteAccessClaim(Guid id);
}
public class AccessClaimApiClient : ApiClientBase<AccessClaim>, IAccessClaimApiClient
{
    public AccessClaimApiClient(HttpClient httpClient)
        : base(httpClient)
    {
    }

	#region Create / Update / Delete

	public async Task<Guid> CreateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		return await PostAsync<Guid>("api/v1/AccessClaim/CreateAccessClaim", accessClaim);
	}

	public async Task UpdateAccessClaim(AccessClaim accessClaim)
	{
		ArgumentNullException.ThrowIfNull(accessClaim);

		await PostAsync<AccessClaim>("api/v1/AccessClaim/UpdateAccessClaim", accessClaim);
	}

	public async Task DeleteAccessClaim(Guid id)
	{
		if (id == Guid.Empty)
			throw new ArgumentNullException(nameof(id));
		await PostAsync<string>($"api/v1/AccessClaim/DeleteAccessClaim/{id}", null);
	}

	#endregion




}
