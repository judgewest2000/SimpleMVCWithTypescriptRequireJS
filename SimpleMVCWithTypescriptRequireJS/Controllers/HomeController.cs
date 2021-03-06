﻿using SimpleMVCWithTypescriptRequireJS.ActionAttributes;
using SimpleMVCWithTypescriptRequireJS.Data.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SimpleMVCWithTypescriptRequireJS.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult ViewWithTypescript() {
            return View();
        }

        [InjectJson]
        public ActionResult KnockoutExample1() {

            var person = new Person
            {
                Name = "Jeff",
                Age = 50
            };


            return View(person);
        }
    }
}