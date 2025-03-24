﻿using System.Collections.Generic;

namespace Dyvenix.Core.Entities
{
    public class EntityList<T> where T : new()
	{
		#region  Constructors

		public EntityList()
		{ }

		public EntityList(IEnumerable<T> entityList)
		{
			this.Data.AddRange(entityList);
		}

		#endregion

		public List<T> Data { get; set; } = new List<T>();
		public int TotalRowCount { get; set; }
	}
}
