using System;
using System.Collections.Generic;
using DataManager.ResourceAccess;
using DataManager.BusinessEntities;

namespace DataManager.BusinessLogic
{
    public class DatamanagerBpl
    {
        public List<Table> GetTables()
        {
            return new DataManagerRal().GetTables();
        }

        public List<DbSchemaDetails> GetSchemadetails()
        {
            return new DataManagerRal().GetSchemadetails();
        }
    }
}
