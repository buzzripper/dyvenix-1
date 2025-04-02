using Dyvenix.App1.Data;
using Dyvenix.App1.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace App1.Server.Tests.Int.Data;

public interface IDataManager : IDisposable
{
	Task ResetDataSet(DataSet dataSet);
}

public class DataManager : IDataManager
{
	#region Fields

	private readonly Db _db;

	#endregion

	#region Ctors / Init

	public DataManager(IDbContextFactory dbContextFactory)
	{
		_db = dbContextFactory.CreateDbContext();
	}

	public void Dispose()
	{
		_db?.Dispose();
	}

	#endregion

	#region Methods

	public async Task ResetDataSet(DataSet dataSet)
	{
		// Clear out existing data
		await DeleteAllData();

		await _db.AppUser.AddRangeAsync(dataSet.AppUsers);
		await _db.SaveChangesAsync();
	}

	private async Task DeleteAllData()
	{
		var affectedRows = await _db.AccessClaim.ExecuteDeleteAsync();
		affectedRows = await _db.AppUser.ExecuteDeleteAsync();
	}

	#endregion
}
