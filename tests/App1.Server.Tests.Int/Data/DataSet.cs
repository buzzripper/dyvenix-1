using Dyvenix.App1.Common.Entities;
using System.Collections.Generic;

namespace App1.Server.Tests.Int.Data;

public class DataSet
{
	internal DataSetType Type { get; set; }
	public List<AppUser> AppUsers { get; set; }
}
