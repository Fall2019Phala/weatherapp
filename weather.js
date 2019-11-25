//https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22
//Sample url from openweathermap.org
//https://api.openweathermap.org/data/2.5/weather?zip=53590,us&appid=b471c0525ec5e2bd2b4b84e22af75685 //then paste into browser to test the url work for sun prairie works
//api key = b471c0525ec5e2bd2b4b84e22af75685 - login into openweathermap to get api key
//$("#search_btn").click(function() {
//    //variables for the OpenWeather API URL
//    var apiLink ='https://api.openweathermap.org/data/2.5/weather'; 
//    var apiKey = 'b471c0525ec5e2bd2b4b84e22af75685';
//    var zipInput = $('#zipCode').val();
//    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
//    
//    console.log(apiURL);
//    
//    $.get(apiURL, function(responseFromOW){
//        console.log(responseFromOW);
//        console.log("temp:", responseFromOW.main.temp);
//        console.log("city:", responseFromOW.name);
//        console.log("description:", responseFromOW.weather[0].description); //when you see [] means an array
//        
//        var temp = responseFromOW.main.temp;
//        var city = responseFromOW.name;
//        var description = responseFromOW.weather[0].description;
//        
//    });
//});


$("#search_btn").click(function() {
   
    //variables for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'b471c0525ec5e2bd2b4b84e22af75685';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW) {
            console.log(responseFromOW);
            console.log("temp:", responseFromOW.main.temp);
            console.log("city:", responseFromOW.name);
            console.log("description:", responseFromOW.weather[0].description);
        
            var temp = responseFromOW.main.temp;
            var city = responseFromOW.name;
            var description = responseFromOW.weather[0].description;
    });
    
    
    
});
