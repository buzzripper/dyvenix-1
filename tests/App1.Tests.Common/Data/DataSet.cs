using Dyvenix.App1.Common.Entities;
using System.Collections.Generic;

namespace App1.Tests.Common.Data;

public class DataSet
{
	public DataSetType Type { get; set; }
	public List<AppUser> AppUsers { get; set; }
}
