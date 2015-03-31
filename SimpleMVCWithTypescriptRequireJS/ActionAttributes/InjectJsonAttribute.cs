using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleMVCWithTypescriptRequireJS.ActionAttributes
{
    public class InjectJsonAttribute : ActionFilterAttribute 
    {
        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var result = (ViewResultBase)filterContext.Result;
            if (result != null)
            {
                var model = result.Model;
                if (model != null)
                {
                    var json = Newtonsoft.Json.JsonConvert.SerializeObject(model, Formatting.Indented, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() });
                    filterContext.Controller.ViewBag.Json = json;
                }
            }

            base.OnActionExecuted(filterContext);
        }
    }
}