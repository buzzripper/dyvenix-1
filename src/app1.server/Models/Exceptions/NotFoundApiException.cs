namespace Dyvenix.App1.Server.Models.Exceptions
{
	public class NotFoundApiException : ApiException
	{
		public NotFoundApiException(string message) : base(message)
		{
		}

		public NotFoundApiException(string correlationId, string message) : base(message)
		{
			CorrelationId = correlationId;
		}

		protected override int GetStatusCode()
		{
			return 404;
		}
	}
}
