using DataManager.BusinessEntities;
using System;
using System.Collections.Generic;
using DataManager.Common;
using Dapper;

namespace DataManager.ResourceAccess
{
    public class DataManagerRal
    {
        public List<Table> GetTables()
        {
            var dynParams = new DynamicParameters();
            return Db.Fetch<Table>("select name from sysobjects where type='u' order by [name] asc", dynParams);
        }

        public List<DbSchemaDetails> GetSchemadetails()
        {
            var dynParams = new DynamicParameters();

            return Db.Fetch<DbSchemaDetails>("select name from sysobjects where type='u' order by [name] asc", dynParams);
        }
    }
}
