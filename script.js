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