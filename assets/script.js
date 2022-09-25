var todayBody = document.querySelector("#todayBody");
var todaysDate = moment().format("M/D/YYYY")
var add1Day = moment().add(1, 'days').format("M/D/YYYY");
var add2Day = moment().add(2, 'days').format("M/D/YYYY");
var add3Day = moment().add(3, 'days').format("M/D/YYYY");
var add4Day = moment().add(4, 'days').format("M/D/YYYY");
var add5Day = moment().add(5, 'days').format("M/D/YYYY");

var day1 = document.querySelector("#day1")
var day2 = document.querySelector("#day2")
var day3 = document.querySelector("#day3")
var day4 = document.querySelector("#day4")
var day5 = document.querySelector("#day5")


var reset = function() {

}

$(document).ready(function () {
    $("#search-btn").click(function(){
        console.log("clicked button")

        var searchText = $("citySearchTextarea").val().trim();

        citiesArray.push(searchText)
        sessionStorage.setItem(searchText)
        
        var lat = data.results[0].bounds.northeast.lat;
        var lng = data.results[0].bounds.northeast.lng;

        var apiWeatherUrl = "https://api.openweathermap.org/data/3.0/onecall?"
        + "lat=" + lat
        +"&lon=" + lon 
        + "&units=imperial"
        + "&appid=1fdacc243055ad2843e8dfca7a2a7ff3";
        
    })
})