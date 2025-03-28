//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 3/28/2025 9:41 PM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;
using System.Collections.Generic;

namespace Dyvenix.App1.Common.Entities;

public partial class AppUser
{
	// PK
	public Guid Id { get; set; }

	// Properties
	public string ExtId { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string Email { get; set; }
	public bool IsEnabled { get; set; }

	// Navigation Properties
	public virtual ICollection<AccessClaim> Claims { get; set; } = new List<AccessClaim>();


	public static class PropNames 
    {
		public const string Id = nameof(AppUser.Id);
		public const string ExtId = nameof(AppUser.ExtId);
		public const string FirstName = nameof(AppUser.FirstName);
		public const string LastName = nameof(AppUser.LastName);
		public const string Email = nameof(AppUser.Email);
		public const string IsEnabled = nameof(AppUser.IsEnabled);
    }
}
