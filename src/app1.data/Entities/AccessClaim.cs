//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/22/2025 8:23 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Data;
using System.Text;

namespace Dyvenix.App1.Data.Entities;

public partial class AccessClaim
{
	// PK
	public Guid Id { get; set; }

	// FKs
	public Guid AppUserId { get; set; }

	// Properties
	public string ClaimName { get; set; }
	public string ClaimValue { get; set; }

	
}
