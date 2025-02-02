namespace Dyvenix.App1.Server.Models.Exceptions
{
	public class BadRequestApiException : ApiException
	{
		public BadRequestApiException(string message) : base(message)
		{
		}

		public BadRequestApiException(string correlationId, string message) : base(message)
		{
			CorrelationId = correlationId;
		}

		protected override int GetStatusCode()
		{
			return 400;
		}
	}
}
