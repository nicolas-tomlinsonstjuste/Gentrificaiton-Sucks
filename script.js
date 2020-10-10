//const form = document.querySelector("#form");
const modal = document.querySelector('.modal');
const bedrooms = document.querySelector('select');
document.addEventListener('DOMContentLoaded', function() {
    M.Modal.init(modal,{});
    M.FormSelect.init(bedrooms,{});
});
// // noUiSlider.create(priceRange, {
// //     start: [750, 1800],
// //     connect: true,
// //     step: 1,
// //     orientation: 'horizontal', // 'horizontal' or 'vertical'
// //     range: {
// //         'min': 0,
// //         'max': 3000
// //     },
// // });
// function submitform() {
//     const data = {
//         zip: '',
//         bedrooms: bedrooms.value,
//         rentRange: '',
//         // priceRange: priceRange.value
//     }
//     console.log('test success', data);
// }
// submit.addEventListener("click", submitform);


$(document).ready(function () {

  var zipCode = ''
  var price = ''
  var bedroom = ''
  //var submitBtn = document.querySelector(".submitBtn");
  var goodCard = document.querySelector(".result-good");
  var fairCard = document.querySelector(".result-fair");
  var badCard = document.querySelector(".result-bad");
  var warningCard = document.querySelector(".result-warning");


  // Get value on button click and show alert
  $("#form").submit(function(event){
    event.preventDefault()
    // if (price !== ''){
    //   $(".row-result").empty();};

      zipCode = $("#zipcode-input").val().trim();

      price = $("#price-input").val().trim();

      bedroom = $("#bedroom-input").val();

      console.log (zipCode, bedroom, price)

    var airApiKey = "CB15C17F-69EA-4423-9893-864F339C43FA";
    var environmentalZipCode = 19149;
    var queryURL ="https://cors-anywhere.herokuapp.com/https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=" + zipCode + '&distance=5&API_KEY=CB15C17F-69EA-4423-9893-864F339C43FA';

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
            console.log(response[0].AQI);

            var xhttp = new XMLHttpRequest();
            var url =
            "https://cors-anywhere.herokuapp.com/https://www.huduser.gov/hudapi/public/fmr/data/METRO37980M37980?year=2018";
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
                  //if zipcode matches user input and bedroom choice === response1.data.basicdata['One-Bedroom'] then compare price vs price listed in response1.data.basicdata['One-Bedroom']. 

                    //Studio apartment
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Efficiency' && price < response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        //alert('Good studio deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        goodCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };

                    } else if(response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Efficiency' && price > response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        //alert('Bad studio deal, not very good. A disaster! D.T');
                        badCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };

                    }else if(response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Efficiency' && price === response1.data.basicdata[i]['Efficiency']) {
                        console.log(response1.data.basicdata[i]['Efficiency'] + ' for a Studio');
                        //alert('It is an okay deal, I could have done better. D.T');
                        fairCard.removeAttribute("class", "hide");
                          if (response[0].AQI > 100){
                            warningCard.removeAttribute("class", "hide");
                          };
                    
                    }   
                    //One Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'One-Bedroom' && price < response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        //alert('Good one-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        goodCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };                      
                        
                    } else if (response1.data.basicdata[i].zip_code === zipCode &&  bedroom === 'One-Bedroom' && price > response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        //alert('Bad one-bedroom deal, not very good. A disaster! D.T');
                        badCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };
              
                    }else if (response1.data.basicdata[i].zip_code === zipCode &&  bedroom === 'One-Bedroom' && price === response1.data.basicdata[i]['One-Bedroom']) {
                        console.log(response1.data.basicdata[i]['One-Bedroom'] + ' for a 1-Bedroom');
                        //alert('It is an okay deal, I could have done better. D.T');
                        fairCard.removeAttribute("class", "hide");
                          if (response[0].AQI > 100){
                            warningCard.removeAttribute("class", "hide");
                          };
                    }  
                    //Two Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Two-Bedroom' && price < response1.data.basicdata[i]['Two-Bedroom']) {
                        //alert('Good two-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        goodCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Two-Bedroom' && price > response1.data.basicdata[i]['Two-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        //alert('Bad two-bedroom deal, not very good. A disaster! D.T');
                        badCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };
                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Two-Bedroom' && price === response1.data.basicdata[i]['Two-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Two-Bedroom'] + ' for a 2-Bedroom');
                        //alert('It is an okay deal, I could have done better. D.T');
                        fairCard.removeAttribute("class", "hide");
                          if (response[0].AQI > 100){
                            warningCard.removeAttribute("class", "hide");
                          };
                    }   
                    //Three Bedroom
                    if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Three-Bedroom' && price < response1.data.basicdata[i]['Three-Bedroom']) {
                        //alert('Good three-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        goodCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Three-Bedroom' && price > response1.data.basicdata[i]['Three-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        //alert('Bad three-bedroom deal, not very good. A disaster! D.T');
                        badCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };
                        
                    }else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Three-Bedroom' && price === response1.data.basicdata[i]['Three-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Three-Bedroom'] + ' for a 3-Bedroom');
                        //alert('It is an okay deal, I could have done better. D.T');
                        fairCard.removeAttribute("class", "hide");
                          if (response[0].AQI > 100){
                            warningCard.removeAttribute("class", "hide");
                          };

                    //Four Bedroom
                    }if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Four-Bedroom' && price < response1.data.basicdata[i]['Four-Bedroom']) {
                        //alert('Good Four-bedroom deal! all me, this is a very great deal. Probably the best deal in history D.T');
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                        goodCard.removeAttribute("class", "hide");
                            if (response[0].AQI > 100){
                              warningCard.removeAttribute("class", "hide");
                            };

                    } else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Four-Bedroom' && price > response1.data.basicdata[i]['Four-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                        //alert('Bad Four-bedroom deal, not very good. A disaster! D.T');
                        badCard.removeAttribute("class", "hide");
                        if (response[0].AQI > 100){
                          warningCard.removeAttribute("class", "hide");
                        };
                    }else if (response1.data.basicdata[i].zip_code === zipCode && bedroom === 'Four-Bedroom' && price === response1.data.basicdata[i]['Four-Bedroom']) {
                        console.log(response1.data.basicdata[i]['Four-Bedroom'] + ' for a 4-Bedroom');
                        //alert('It is an okay deal, I could have done better. D.T');
                        fairCard.removeAttribute("class", "hide");
                          if (response[0].AQI > 100){
                            warningCard.removeAttribute("class", "hide");
                          };
                    } 
                }
            });
        });
    });
})





    // document.addEventListener('DOMContentLoaded', function() {
    //     var elems = document.querySelectorAll('.sidenav');
    //     var instances = M.Sidenav.init(elems, options)};

// $(document).ready(function () {
//   var menu = $('.nav-wrapper');
//       var target = $('#' +menu.attr("data-target"));
//   menu.pushpin({
//     top: target.offset().top,
//   });
//});


    //document.addEventListener('DOMContentLoaded', function() {
    //    var elems = document.querySelectorAll('.sidenav');
      //  var instances = Sidenav.init(elems, options);
     // });
    //  $(document).ready(function(){
    //     $('.sidenav').sidenav();
    //   });



        // const form = document.querySelector("#form");
        // const submit = document.querySelector("#submit");
        // const modal = document.querySelector('.modal');
        // const bedrooms = document.querySelector('select');
        // const rent = document.querySelector('#rentRange')
        // // const priceRange = document.getElementById('test-slider');
        // document.addEventListener('DOMContentLoaded', function() {
        //     M.Modal.init(modal,{});
        //     M.FormSelect.init(bedrooms,{});
        // });
        // // noUiSlider.create(priceRange, {
        // //     start: [750, 1800],
        // //     connect: true,
        // //     step: 1,
        // //     orientation: 'horizontal', // 'horizontal' or 'vertical'
        // //     range: {
        // //         'min': 0,
        // //         'max': 3000
        // //     },
        // // });
        // function submitform() {
        //     const data = {
        //         zip: '',
        //         bedrooms: bedrooms.value,
        //         rentRange: '',
        //         // priceRange: priceRange.value
        //     }
        //     console.log('test success', data);
        // }
        // submit.addEventListener("click", submitform);

