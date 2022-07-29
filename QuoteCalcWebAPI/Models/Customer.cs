using System;
using System.Collections.Generic;

namespace QuoteCalcWebAPI.Models
{
    public partial class Customer
    {
        public int Id { get; set; }
        public int AmountRequired { get; set; }
        public int Term { get; set; }
        public string Title { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string Mobile { get; set; } = null!;
        public string Email { get; set; } = null!;
    }
}
