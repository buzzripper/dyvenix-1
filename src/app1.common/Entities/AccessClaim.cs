//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/8/2025 9:53 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;

namespace Dyvenix.App1.Common.Entities;

public partial class AccessClaim
{
	// PK
	public Guid Id { get; set; }

	// FKs
	public Guid AppUserId { get; set; }

	// Properties
	public string ClaimName { get; set; }
	public string ClaimValue { get; set; }

	

	public static class PropNames 
    {
		public const string Id = nameof(AccessClaim.Id);
		public const string ClaimName = nameof(AccessClaim.ClaimName);
		public const string ClaimValue = nameof(AccessClaim.ClaimValue);
		public const string AppUserId = nameof(AccessClaim.AppUserId);
    }
}
