using Dyvenix.Core.DTOs;
using Dyvenix.Core.Exceptions;
using System;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Dyvenix.Core.ApiClients;

public abstract class ApiClientBase<T> where T : class
{
	#region Fields

	private readonly HttpClient _httpClient;
	//private readonly _serializerOptions = new JsonSerializerOptions {PropertyNameCaseInsensitive = true};

	private readonly JsonSerializerOptions _jsonSerializerOptionsGet = new JsonSerializerOptions {
		DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
		PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
		PropertyNameCaseInsensitive = true
	};
	private readonly JsonSerializerOptions _jsonSerializerOptionsPost = new JsonSerializerOptions {
		WriteIndented = true,
		PropertyNamingPolicy = JsonNamingPolicy.CamelCase
	};

	#endregion

	#region Ctors / Init

	public ApiClientBase(HttpClient httpClient)
	{
		_httpClient = httpClient;
		_jsonSerializerOptionsGet.Converters.Add(new JsonStringEnumConverter());
	}

	#endregion

	#region Methods

	protected async Task<TResult> GetAsync<TResult>(string uri)
	{
		var httpResponse = await _httpClient.GetAsync(uri);

		if (!httpResponse.IsSuccessStatusCode)
			throw new HttpException((int)httpResponse.StatusCode, $"{(int)httpResponse.StatusCode} - {httpResponse.ReasonPhrase}");
		if (httpResponse.StatusCode == HttpStatusCode.NoContent)
			return default;
		var responseString = await httpResponse.Content.ReadAsStringAsync();

		var apiResponse = JsonSerializer.Deserialize<ApiResponse<TResult>>(responseString, _jsonSerializerOptionsGet);

		if (apiResponse.StatusCode >= 100)
			throw new ApiException(apiResponse.StatusCode, apiResponse.Message, apiResponse.CorrelationId);

		return apiResponse.Data;
	}

	protected async Task PostAsync(string uri, object payload)
	{
		var responseString = await PostAsyncStr(uri, payload);

		var apiResponse = JsonSerializer.Deserialize<ApiResponse>(responseString, _jsonSerializerOptionsPost);

		if (apiResponse.StatusCode >= 100)
			throw new ApiException(apiResponse.StatusCode, apiResponse.Message, apiResponse.CorrelationId);
	}

	protected async Task<TResult> PostAsync<TResult>(string uri, object payload)
	{
		var responseString = await PostAsyncStr(uri, payload);

		var apiResponse = JsonSerializer.Deserialize<ApiResponse<TResult>>(responseString, _jsonSerializerOptionsPost);

		if (apiResponse.StatusCode >= 100)
			throw new ApiException(apiResponse.StatusCode, apiResponse.Message, apiResponse.CorrelationId);

		return apiResponse.Data;
	}

	protected async Task<string> PostAsyncStr(string uri, object payload)
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
