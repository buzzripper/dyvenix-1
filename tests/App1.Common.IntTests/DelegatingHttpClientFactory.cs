//using System.Net.Http;

//namespace App1.Common.IntTests;

//public class DelegatingHttpClientFactory : IHttpClientFactory
//{
//    private readonly IHttpClientFactory _innerFactory;
//    private readonly string _defaultClientName;

//    public DelegatingHttpClientFactory(IHttpClientFactory innerFactory, string defaultClientName)
//    {
//        _innerFactory = innerFactory;
//        _defaultClientName = defaultClientName;
//    }

//    public HttpClient CreateClient(string name)
//    {
//        return _innerFactory.CreateClient(_defaultClientName);
//    }
//}
