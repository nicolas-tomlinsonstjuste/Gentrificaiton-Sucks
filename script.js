var zipCode = ''

$(document).ready(function () {
    // Get value on button click and show alert
    $(".submitBtn").click(function(){
        var str = $("#zipCode").val().trim();
       zipCode = str
        console.log (str)
    
    var airApiKey = "CB15C17F-69EA-4423-9893-864F339C43FA";
    var environmentalZipCode = 19149;
    var queryURL =
    "https://cors-anywhere.herokuapp.com/https://www.airnowapi.org/aq/observation/zipCode/historical/?format=text/csv&zipCode=" +
    zipCode +
    "&date=2015-10-05T00-0000&distance=25&API_KEY=CB15C17F-69EA-4423-9893-864F339C43FA";

    // Performing our AJAX GET request
   
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
     }).then(function (response1) {
                console.log(response1.data);
                console.log(zipCode);
                for (var i = 0; i < response1.data.basicdata.length; i++) {
                    
                    if (response1.data.basicdata[i].zip_code === zipCode) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        //bedroomInput = drop down similar to var Varname = $("#zipCode").val().trim();
                        if (bedroomInput === 'One-Bedroom') {
                            //1000 = user input for asking price
                            if (response1.data.basicdata[i]['One-Bedroom'] > 1000 ) {
                                //do something/compare
                            }
                            
                        }
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                                
                    }
                }
            
            });
        });
    });
})



    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options)};

        6c046220f8534f804e5ce3b92592c1c203320d45

    //document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.sidenav');
      //  var instances = Sidenav.init(elems, options);
     // });
     $(document).ready(function(){
        $('.sidenav').sidenav();
      });



      $("#calculateBtn").on("click", function () {
        var rentAsk = $("#rent-input").val().trim();
        searchWeather(rentAsk);
        // Calling the renderButtons function to display the initial buttons   
        renderButtons();

    })

      var calculateBtn = document.querySelector("#calculateBtn");
      var goodCard = document.querySelector(".result-good");
      var fairCard = document.querySelector(".result-fair");
      var badCard = document.querySelector(".result-bad");

      calculateBtn.addEventListener("click", function () {
        if (rentAsk > calculatedRent){
          goodCard.setAttribute("class", "hide");
          fairCard.setAttribute("class", "hide");
          badCard.removeAttribute("class", "hide");
        } else if (rentAsk === calculatedRent){
          goodCard.setAttribute("class", "hide");
          fairCard.removeAttribute("class", "hide");
          badCard.setttribute("class", "hide");
        } else{
          goodCard.removeAttribute("class", "hide");
          fairCard.setAttribute("class", "hide");
          badCard.setAttribute("class", "hide");
        }
      };

      function calculateRent(){

      };

        calculateRent();

  });
