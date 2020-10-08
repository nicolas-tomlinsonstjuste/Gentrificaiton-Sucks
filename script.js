var airApiKey =   'CB15C17F-69EA-4423-9893-864F339C43FA'
var environmentalZipCode = 19149
var queryURL =   'https://cors-anywhere.herokuapp.com/https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode='+ environmentalZipCode +'&distance=25&API_KEY=CB15C17F-69EA-4423-9893-864F339C43FA'


 // Performing our AJAX GET request

 $.ajax({
    url: queryURL,
    method: "GET"
    })
    // After the data comes back from the API
    .then(function(response) {
        // Storing an array of results in the results variable
        var results = response.reportingArea;
        console.log (response[0].ReportingArea);
    });

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
          
        