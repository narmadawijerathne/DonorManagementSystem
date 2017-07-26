using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DonorManagementSystem.Models
{
    public class Donations
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Province { get; set; }
        public string NameonCard { get; set; }
        public int CardNumber { get; set; }
        public int CVV { get; set; }        
        public DateTime PaymentDate { get; set; }
        public double AmountPaid { get; set; }

    }
}