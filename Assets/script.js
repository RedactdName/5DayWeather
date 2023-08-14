console.log("JS is loaded");
// Variables
const  citySearch = document.getElementById("citySearch")
const searchBtn = document.getElementById("searchBtn")
var keyID = 'bd264bda2339694f1d8b05eeddb26285'

let weatherSearch = 'https://api.openweathermap.org/data/2.5/forecast?q='+ citySearch +'&appid='+ keyID

// Functions
function clickHandler(e) {
    e.preventDefault()
    const userInput = citySearch.value.trim()
    console.log (userInput)
    getGeo(userInput)

}
//Next fucntion use the user input for the GEO API
function getGeo(userInput) {
    var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=${keyID}`
    console.log(userInput)

    fetch(apiURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    cityForecast(data[0])

    })
    
}
//Use the geoAPI data for the weatherAPI
function cityForecast(cityCoords) {
    //var cityCoords= data[0]
    console.log(cityCoords)
var {lat ,lon } = cityCoords
var city = cityCoords.name
    //fetch
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${keyID}`
    

    fetch(apiURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        currentDay(data.list[0].main, city)
        forecast(data.list)
  

    })
}
//currentDay is for 1 day; name, date, imgIcon, temp, humidity, wind into a card
    function currentDay(weather, city) {
        console.log(weather, city)
        var day = document.getElementById('currentDay')
        day.textContent= city
        
        //create variables that rep the data
        var temp= weather.temp
        var humidity= weather.humidity
        var wind = weather.wind
    console.log(temp, humidity, wind)

    //create the card (line 26 in html)
var card = document.createElement('div')
        card.classList.add('card')
var cardBody = document.createElement('div')
        // cardBody.setAttribute.add('card-body')
var cardText = document.createElement('p')
        var tempEL = document.getElementById('temp')
        tempEL.textContent= temp
        var humidEL = document.getElementById('humid') 
        humidEL.textContent= humidity
        var windEl = document.getElementById('wind')
        windEl.textContent= wind
    // cardText.textContent= temp 
    // cardText.textContent= humidity
    // cardText.textContent= wind
  

        cardBody.appendChild(cardText);  
        card.appendChild(cardBody);
        day.appendChild(card);
        
        

// display the data to the card, then need to append
    }

//forecast is for 5 days; date, imgIcon, temp, humidity, wind into 5 cards
// for (let i = 0; i < forecast.length; i++) {
//     const element = array[i];
    
// }
// WHEN I search for a city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view current weather conditions for that city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// Special Functions
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
//Add city to search history (localStorage)
// if (localStorage.getItem("cities")) {
// 	storedCities = JSON.parse(localStorage.getItem("cities"));
// 	console.log(storedCities);
// 	for (var i = 0; i < storedCities.length; i++) {
// 		lastCitySearched = storedCities.length - 1;
// 		var lastCity = storedCities[lastCitySearched];
// 	}
// } else {
// 	cities;
// }
// renderLastCityInfo();
// console.log("cities", cities);

// // Busniess logic
//button to enter (eventListener)
searchBtn.addEventListener("click", clickHandler);




//Open webpage
    //see search bar to enter city
//After entering city get results of weather for next 5 days
    //Use of API info
    // https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    
    //city name , date, temperature, humidity, windspeed appear as text
    //image of current weather conditions
 //Create search history bar/aside
    //displays previous cities search for
    //links to present their data again if clicked)   
