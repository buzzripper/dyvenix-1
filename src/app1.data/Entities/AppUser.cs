//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/22/2025 8:23 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace Dyvenix.App1.Data.Entities;

public partial class AppUser
{
	// PK
	public Guid Id { get; set; }

	// Properties
	public string ExtId { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string Email { get; set; }
	public DateTime? Birthdate { get; set; }
	public TimeSpan? Age { get; set; }
	public DateTime IsEnabled { get; set; }
	public decimal Temp { get; set; }
	public byte[] VarBin { get; set; }
	public byte? Fubar { get; set; }

	// Navigation Properties
	public virtual ICollection<AccessClaim> Claims { get; set; } = new List<AccessClaim>();

}
