using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataManager.BusinessLogic;

namespace DataManagerApi.Controllers
{
    public class DataManagerController : ApiController
    {
        [HttpGet]
        [Route("DM/Table")]
        public HttpResponseMessage GetTables()
        {
            var resultData = new DatamanagerBpl().GetTables();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, resultData);
            return response;
        }
    }
}
