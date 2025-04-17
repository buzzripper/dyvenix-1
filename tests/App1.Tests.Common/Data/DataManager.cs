﻿using Dyvenix.App1.Data;
using Dyvenix.App1.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Dyvenix.App1.Tests.Common.Data;

public interface IDataManager : IDisposable
{
	Dictionary<DataSetType, DataSet> DataSets { get; }
	Task<DataSet> ResetDataSet(DataSetType dataSetType);
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

		DataSets.Add(DataSetType.Default, new DefaultDataGenerator().CreateDataSet());
	}

	public void Dispose()
	{
		_db?.Dispose();
	}

	#endregion

	public Dictionary<DataSetType, DataSet> DataSets { get; } = [];

	#region Methods

	public async Task<DataSet> ResetDataSet(DataSetType dataSetType)
	{
		var dataSet = this.DataSets[dataSetType];

		// Clear out existing data and add test data
		await DeleteAllData();

		await _db.AppUser.AddRangeAsync(dataSet.AppUser);
		await _db.SaveChangesAsync();

		return dataSet;
	}

	private async Task DeleteAllData()
	{
		_db.AccessClaim.RemoveRange(await _db.AccessClaim.ToListAsync());
		_db.AppUser.RemoveRange(await _db.AppUser.ToListAsync());

		await _db.SaveChangesAsync();
	}

	#endregion
}
