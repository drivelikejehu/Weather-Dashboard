$(document).ready(function(){
  console.log("hhh");

    $("#searchBtn").on("click", function(event){
      event.preventDefault();
      
      var cityInput = $("#searchInput").val();
      console.log(cityInput);



    });
    
  });