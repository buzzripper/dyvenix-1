//------------------------------------------------------------------------------------------------------------
// This file was auto-generated 4/6/2025 11:44 AM. Any changes made to it will be lost.
//------------------------------------------------------------------------------------------------------------
using System;

namespace Dyvenix.App1.Common.Entities;

public partial class AppUser
{
	// PK
	public Guid Id { get; set; }

	// Properties
	public bool IsEnabled { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string Email { get; set; }
	public string CompanyId { get; set; }

	

	public static class PropNames 
    {
		public const string Id = nameof(AppUser.Id);
		public const string IsEnabled = nameof(AppUser.IsEnabled);
		public const string FirstName = nameof(AppUser.FirstName);
		public const string LastName = nameof(AppUser.LastName);
		public const string Email = nameof(AppUser.Email);
		public const string CompanyId = nameof(AppUser.CompanyId);
    }
}
