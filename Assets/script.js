console.log("JS is loaded");
// Variables
const  citySearch = document.getElementById("citySearch")
const searchBtn = document.getElementById("searchBtn")

// Functions
function onClick(e) {
    e.preventDefault()
    const userInput = citySearch.value 
    console.log (userInput)
    
}
// WHEN I search for a city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed

// WHEN I view current weather conditions for that city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// Special Functions
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// Busniess logic
searchBtn.addEventListener("click", onClick);




//Open webpage
    //see search bar to enter city
    //button to enter (eventListener)
//After entering city get results of weather for next 5 days
    //Use of API info
    // https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
    
    //city name , date, temperature, humidity, windspeed appear as text
    //image of current weather conditions
 //Add city to search history (localStorage)
 //Create search history bar/aside
    //displays previous cities search for
    //links to present their data again if clicked)   
