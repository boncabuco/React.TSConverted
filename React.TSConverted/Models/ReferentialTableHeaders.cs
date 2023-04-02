using Microsoft.AspNetCore.Mvc;

namespace React.TSConverted.Models
{
    public class ReferentialTableHeaders
    {
        public string Key { get; set; }

        public string DataType { get; set; }

        public bool IsPrimary { get; set; }

        public int Limit { get; set; }
    }
}
