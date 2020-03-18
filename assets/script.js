$(document).ready(function(){

    $("#searchBtn").on("click", function(event){
      event.preventDefault();
      
      var cityInput = $("#searchInput").val();
      console.log(cityInput);

      var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=caf1fb63b24af4c69a64677a2a7ad5ae";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });



    });
    
  });