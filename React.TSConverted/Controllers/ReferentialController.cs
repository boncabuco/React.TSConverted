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

        private void BuildData()
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
                Key = "FirstName",
                // DisplayName = "FirstName",
                DataType = "string",
                IsPrimary = false,
                Limit = 20
            });

            _columnDefinitions.Add(new ReferentialTableHeaders
            {
                Key = "LastName",
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
            BuildData();
        }

        [HttpGet("Header")]
        public ActionResult<IEnumerable<ReferentialTableHeaders>> GetReferentialHeader()
        {
            return Ok(_columnDefinitions.ToList());
        }

        [HttpGet("Data")]
        public ActionResult<IEnumerable<ReferentialTableHeaders>> GetReferentialData()
        {
            return Ok(_userData.ToList());
        }
    }
}