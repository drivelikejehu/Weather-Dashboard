$(document).ready(function(){

    $("#searchBtn").on("click", function(event){
      event.preventDefault();
      $(".card").show();
      
      var cityInput = $("#searchInput").val();
      console.log(cityInput);

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=caf1fb63b24af4c69a64677a2a7ad5ae";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.name);

        $(".card-city").html("<h5>" + response.name + "</h5>");
        $(".")
        $(".")
        $(".")
        $(".")
      });
      // <h5 class="card-city"></h5>
      // <div class="card-temp">Temperature: </div>
      // <div class="card-humid">Humidity: </div>
      // <div class="card-wind">Wind Speed: </div>
      // <div class="card-uv">UV Index: </div>

    });
    
  });