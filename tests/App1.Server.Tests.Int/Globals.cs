using Dyvenix.App1.Data.Contexts;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App1.Server.Tests.Int;
internal static class Globals
{
	internal static string ConnectionString { get; set; }
	internal static DbContextFactory DbContextFactory { get; set; }
}
