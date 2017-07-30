using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DonorManagementSystem.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

      

        public ActionResult ViewLoginPanel()
        {
            return PartialView("LoginPanel");
        }

        [HttpPost]
        public ActionResult LoginPanel()
        {
            return RedirectToAction("Index");
        }

        public ActionResult ViewPaymentPanel()
        {
            return PartialView("PaymentPanel");
        }

        [HttpPost]
        public ActionResult PaymentPanel()
        {
            return RedirectToAction("LoginPanel");
        }

        public ActionResult ViewContact()
        {
            return PartialView("Contact");
        }

        //[HttpPost]
        //public ActionResult Contact()
        //{
        //    return RedirectToAction("Index");
            
        //}
    }
}