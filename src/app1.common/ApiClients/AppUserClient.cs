//using Dyvenix.Core.ApiClients;

//namespace Dyvenix.App1.Common.ApiClients;

//public interface IAppUserClient
//{
//}

//public class AppUserClient : ApiClientBase<AppUser>, IAppUserClient
//{
//	public BenefitsAcctsGatewayApiClient(IHttpClientFactory httpClientFactory, string baseUrl, IHttpContextAccessor httpContextAccessor, ILogger<BenefitsAcctsGatewayApiClient> logger)
//		: base(httpClientFactory, baseUrl, httpContextAccessor, logger)
//	{
//	}

//	public async Task<List<TransactionDetail>> GetTransactions(int personId, long campaignId, int maxItemCount)
//	{
//		var transactions = await GetAsync<IEnumerable<BenefitsAcctsTransaction>>($"v1/Transaction/{personId}/{campaignId}");

//		return transactions
//			.OrderBy(x => x.SubmissionDate)
//			.TakeLast(maxItemCount)
//			.Select(x => x.ToTransactionDetail())
//			.ToList();
//	}

//	public async Task<decimal> GetAccountBalance(int personId, long campaignId)
//	{
//		return await GetAsync<decimal>($"v1/Balance/{personId}/{campaignId}");
//	}
//}
