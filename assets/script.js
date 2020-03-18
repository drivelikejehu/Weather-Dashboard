$(document).ready(function(){

  // function cityButtons() {
  //   $("#city-buttons").text("HJHJHJ");
  // }

    $("#searchBtn").on("click", function(event){
      event.preventDefault();
      $(".card").show();
      $("#five-day-forecast").show();
      
      var cityInput = $("#searchInput").val();
      console.log(cityInput);

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=caf1fb63b24af4c69a64677a2a7ad5ae";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.main.humidity);

        function tempConversion() {
          var temp = (response.main.temp - 273.15) * 1.80 + 32;
          var tempFarhenheit = Math.floor(temp);
          return tempFarhenheit;
        }
  

        $(".card-city").html("<h3>" + response.name + "</h3>");
        $(".card-temp").text("Temperature: " + tempConversion() + " °F")
        $(".card-humid").text("Humidity: " + response.main.humidity);
        $(".card-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".card-uv")
      });

      
      // cityButtons();
      // <div class="card-uv">UV Index: </div>

    });
    
  });