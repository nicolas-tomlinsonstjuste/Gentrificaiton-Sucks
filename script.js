var airApiKey = "CB15C17F-69EA-4423-9893-864F339C43FA";
var environmentalZipCode = 19149;
var queryURL =
  "https://cors-anywhere.herokuapp.com/https://www.airnowapi.org/aq/observation/zipCode/historical/?format=text/csv&zipCode=" +
  environmentalZipCode +
  "&date=2015-10-05T00-0000&distance=25&API_KEY=CB15C17F-69EA-4423-9893-864F339C43FA";

// Performing our AJAX GET request

$.ajax({
  url: queryURL,
  method: "GET",
})
  // After the data comes back from the API
  .then(function (response) {
    // Storing an array of results in the results variable
    var results = response.ReportingArea;
    // console.log(response[0].ReportingArea);
    console.log(response);

    var xhttp = new XMLHttpRequest();
    var url =
      "https://cors-anywhere.herokuapp.com/https://www.huduser.gov/hudapi/public/fmr/data/METRO37980M37980?year=2018";
    // xhttp.open("GET", url, true);
    // xhttp.setRequestHeader(
    //   "Authorization",
    //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4MmM4ZmJmNWUzMmJmYTVhNjg1YzE0OWE5N2UyNjBmZjZjODcxZTgzMjYxNWFjNDg5MWEzZDNhY2VhN2Y2NTA0YTBmMzUzMjhmNzhiMmNkIn0.eyJhdWQiOiI2IiwianRpIjoiNzgyYzhmYmY1ZTMyYmZhNWE2ODVjMTQ5YTk3ZTI2MGZmNmM4NzFlODMyNjE1YWM0ODkxYTNkM2FjZWE3ZjY1MDRhMGYzNTMyOGY3OGIyY2QiLCJpYXQiOjE2MDIwMjM0MzEsIm5iZiI6MTYwMjAyMzQzMSwiZXhwIjoxOTE3NTU2MjMxLCJzdWIiOiI5NzUwIiwic2NvcGVzIjpbXX0.U_HzN_NuOd_bTARXe-tgMLeSzwVIRg8G7nNxow-keMgSH6KM4NFrbrVLn89XH8B8ZpdrzE5a2rwHkyD-Kn48pw"
    // );
    // xhttp.send();
    // xhttp.onreadystatechange = function () {
    //   if (this.readyState == 4) {
    //     console.log(xhttp.responseText);
    //   }
    // };
    $.ajax({
      url,
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4MmM4ZmJmNWUzMmJmYTVhNjg1YzE0OWE5N2UyNjBmZjZjODcxZTgzMjYxNWFjNDg5MWEzZDNhY2VhN2Y2NTA0YTBmMzUzMjhmNzhiMmNkIn0.eyJhdWQiOiI2IiwianRpIjoiNzgyYzhmYmY1ZTMyYmZhNWE2ODVjMTQ5YTk3ZTI2MGZmNmM4NzFlODMyNjE1YWM0ODkxYTNkM2FjZWE3ZjY1MDRhMGYzNTMyOGY3OGIyY2QiLCJpYXQiOjE2MDIwMjM0MzEsIm5iZiI6MTYwMjAyMzQzMSwiZXhwIjoxOTE3NTU2MjMxLCJzdWIiOiI5NzUwIiwic2NvcGVzIjpbXX0.U_HzN_NuOd_bTARXe-tgMLeSzwVIRg8G7nNxow-keMgSH6KM4NFrbrVLn89XH8B8ZpdrzE5a2rwHkyD-Kn48pw",
      },
    }).then(function (response) {
      console.log(response);
    });
  });
