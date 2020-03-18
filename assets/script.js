$(document).ready(function(){

  // function cityButtons() {
  //   $("#city-buttons").text("HJHJHJ");
  // }

  // https://tecadmin.net/get-current-date-time-javascript/
  // http://jsfiddle.net/nCE9u/

  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var date = "(" + ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day + '/' + d.getFullYear() + ")";

    $("#searchBtn").on("click", function(event){
      event.preventDefault();
      $(".card").show();
      $("#five-day-forecast").show();

      var cityInput = $("#searchInput").val();
      var apiKey = "&appid=caf1fb63b24af4c69a64677a2a7ad5ae";
      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + apiKey;
      var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + apiKey;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        console.log(response);

        function tempConversion() {
          var temp = (response.main.temp - 273.15) * 1.80 + 32;
          var tempFarhenheit = Math.floor(temp);
          return tempFarhenheit;
        }

        $(".card-city").html("<h3>" + response.name + " " + date + "</h3>");
        // $(".card-city").text(date.toLocaleDateString('en-US'));
        $(".card-temp").text("Temperature: " + tempConversion() + " °F")
        $(".card-humid").text("Humidity: " + response.main.humidity);
        $(".card-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        // $(".card-uv")
      });

      $.ajax({
        url: fiveDayURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.list[0]);
      
    });

      
      // cityButtons();
      // <div class="card-uv">UV Index: </div>

    });
    
  });