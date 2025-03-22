//------------------------------------------------------------------------------
// This file was auto-generated. Any changes made to it will be lost.
//------------------------------------------------------------------------------
using System;
using System.Data;
using System.Text;

namespace Dyvenix.App1.Data.Entities;

public partial class AccessClaim
{
	public Guid Id { get; set; }

	public Guid AppUserId { get; set; }

	public string ClaimName { get; set; }
	public string ClaimValue { get; set; }
}
