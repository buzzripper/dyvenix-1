using Dyvenix.Core.Exceptions;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Dyvenix.Core.ApiClients;

public abstract class ApiClientBase<T> where T : class
{
	#region Fields

	private readonly HttpClient _httpClient;
	private readonly JsonSerializerOptions _jsonSerializerOptionsGet = new JsonSerializerOptions {
		DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
		PropertyNamingPolicy = JsonNamingPolicy.CamelCase
	};
	private readonly JsonSerializerOptions _jsonSerializerOptionsPost = new JsonSerializerOptions {
		WriteIndented = true,
		PropertyNamingPolicy = JsonNamingPolicy.CamelCase
	};

	#endregion

	#region Ctors / Init

	public ApiClientBase(string baseUrl, IHttpClientFactory httpClientFactory, IHttpContextAccessor httpContextAccessor)
	{
		_httpClient = httpClientFactory.CreateClient();
		_httpClient.BaseAddress = new Uri(baseUrl.TrimEnd());

		var accessToken = httpContextAccessor.HttpContext.GetTokenAsync("access_token")?.GetAwaiter().GetResult();
		if (string.IsNullOrWhiteSpace(accessToken))
			throw new Exception($"{GetType().Name}: No access token found for ApiClient {baseUrl}.");

		_httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
	}

	#endregion

	#region Methods

	protected async Task<TResult> GetAsync<TResult>(string uri)
	{
		var httpResponse = await _httpClient.GetAsync(uri);

		if (!httpResponse.IsSuccessStatusCode)
			throw new HttpException((int)httpResponse.StatusCode, httpResponse.ReasonPhrase);

		var responseString = await httpResponse.Content.ReadAsStringAsync();

		return JsonSerializer.Deserialize<TResult>(responseString, _jsonSerializerOptionsGet);
	}

	protected async Task<TResult> PostAsync<TResult>(string uri, object payload)
	{
		var responseString = await PostAsync(uri, payload);

		return JsonSerializer.Deserialize<TResult>(responseString);
	}

	protected async Task<string> PostAsync(string uri, object payload)
	{
		var json = JsonSerializer.Serialize(payload, _jsonSerializerOptionsPost);
		using var stringContent = new StringContent(json, Encoding.UTF8, "application/json");

		var httpResponse = await _httpClient.PostAsync(uri, stringContent);

		if (!httpResponse.IsSuccessStatusCode)
			throw new HttpException((int)httpResponse.StatusCode, httpResponse.ReasonPhrase);

		return await httpResponse.Content.ReadAsStringAsync();
	}

	#endregion
}
