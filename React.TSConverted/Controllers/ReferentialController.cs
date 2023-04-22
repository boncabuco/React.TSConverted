using Microsoft.AspNetCore.Mvc;
using React.TSConverted.Models;

namespace React.TSConverted.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReferentialController : ControllerBase
    {

        List<ReferentialTableHeaders> _columnDefinitions = null;
        List<UserData> _userData = null;
        List<CountryData> _countryData = null;

        private void BuildCountryData(){
            _columnDefinitions = new List<ReferentialTableHeaders>();
            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "countryCode",
                DataType = "string",
                IsPrimary = true,
                Limit = 5
            });

            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "countryName",
                DataType = "string",
                IsPrimary = true,
                Limit = 5
            });

            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "population",
                DataType = "int",
                IsPrimary = true,
                Limit = 5
            });

            _countryData = new List<CountryData>();

            for (int i = 0; i < 100; i++)
            {
                Random random = new Random();
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                string randomLetters2 = new string(Enumerable.Repeat(chars, 2)
                  .Select(s => s[random.Next(s.Length)]).ToArray());

                string randomLetters6 = new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());

                string randomLetters8 = new string(Enumerable.Repeat(chars, 8)
                .Select(s => s[random.Next(s.Length)]).ToArray());

                _countryData.Add(new CountryData
                {
                    CountryCode = $"{randomLetters2}".ToUpper(),
                    CountryName = $"{randomLetters6}",
                    Population = 100
                });
            }
        }
        

        private void BuildStaffData()
        {
            _columnDefinitions = new List<ReferentialTableHeaders>();
            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "utCode",
                // DisplayName = "UTCode",
                DataType = "string",
                IsPrimary = true,
                Limit = 5
            });

            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "firstName",
                // DisplayName = "FirstName",
                DataType = "string",
                IsPrimary = false,
                Limit = 20
            });

            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "lastName",
                // DisplayName = "LastName",
                DataType = "string",
                IsPrimary = false,
                Limit = 20
            });

            _userData = new List<UserData>();

            for (int i = 0; i < 100; i++)
            {
                Random random = new Random();
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                string randomLetters4 = new string(Enumerable.Repeat(chars, 4)
                  .Select(s => s[random.Next(s.Length)]).ToArray());

                string randomLetters6 = new string(Enumerable.Repeat(chars, 6)
                .Select(s => s[random.Next(s.Length)]).ToArray());

                string randomLetters8 = new string(Enumerable.Repeat(chars, 8)
                .Select(s => s[random.Next(s.Length)]).ToArray());

                _userData.Add(new UserData
                {
                    UTCode = $"UT{randomLetters4}".ToUpper(),
                    FirstName = $"{randomLetters6}",
                    LastName = $"{randomLetters8}"
                });
            }
        }

        public ReferentialController()
        {
            BuildStaffData();
            BuildCountryData();
        }

        [HttpGet("Header/{model}")]
        public ActionResult<IEnumerable<ReferentialTableHeaders>> GetReferentialHeader(string model)
        {
            if (model.ToUpper() == "STAFF")
            {
                BuildStaffData();
            }
            else
            {
                BuildCountryData();
            }

            return Ok(_columnDefinitions.ToList());
        }

        [HttpGet("Data/{model}")]
        public ActionResult<IEnumerable<ReferentialTableHeaders>> GetStaffData(string model)
        {
            if(model.ToUpper() == "STAFF") {
                
                return Ok(_userData.ToList());
            }
            
            return Ok(_countryData.ToList());
            
        }
    }
}