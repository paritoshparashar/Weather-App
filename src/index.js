import "./main.css";

let cityInput = document.getElementById("city");

async function makeWeatherRequest (city) {
    
    let forecast3Days = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=4bf20ce3218b4f4c9aa144244240703&q=${city}&days=3&aqi=yes&alerts=yes` , {mode : 'cors'});

    let forecast3DaysObj = await forecast3Days.json();
    console.log(`Last Updated: ${forecast3DaysObj.current.last_updated}`)
    console.log(`Conditions: ${forecast3DaysObj.current.condition.text}`);
    console.log('__________________________')

}

async function timeZoneRequest (city) {
    
    let timeZone = await fetch( `https://api.weatherapi.com/v1/timezone.json?key=4bf20ce3218b4f4c9aa144244240703&q=${city}` , {mode : 'cors'});
    let timeZoneObj = await timeZone.json();

    let region = `${timeZoneObj.location.name}, ${timeZoneObj.location.country} `
    console.log(region);

    let date = getFormattedDate((timeZoneObj.location.localtime).split(' ')[0]);
    let time = (timeZoneObj.location.localtime).split(' ')[1];
    console.log(date + ' | ' + time);
    console.log('__________________________')
}

function getFormattedDate (str) {

    // Input date in the format "dd-mm-yyyy"
    const inputDateString = str;

    // Parse the input date string
    const parts = inputDateString.split("-");
    const day = parseInt(parts[2], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript
    const year = parseInt(parts[0], 10);

    // Create a Date object
    const inputDate = new Date(year, month, day);

    // Define an array of days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get the day of the week from the Date object
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const monthName = months[inputDate.getMonth()];

    // Display the result
    const formattedDate = `${dayOfWeek}, ${day} ${monthName} ${year}`;
    return (formattedDate);

}

async function currentWeatherRequest (city){

    let currentWeather = await fetch( `https://api.weatherapi.com/v1/current.json?key=4bf20ce3218b4f4c9aa144244240703&q=${city}` , {mode : 'cors'});

    let currentWeatherObj = await currentWeather.json();
    let currentData = [
        {
            Temp : currentWeatherObj.current.temp_c , 
            Wind : currentWeatherObj.current.wind_mph , 
            Humidity : currentWeatherObj.current.humidity , 
            Cloud : currentWeatherObj.current.cloud , 
            Visibility : currentWeatherObj.current.vis_km , 
            Precipitation : currentWeatherObj.current.precip_mm
        }
    ]
    console.table(currentData);
    console.log('__________________________')

}

function start (){
    
    let city = cityInput.value;
    makeWeatherRequest(city);
    timeZoneRequest(city)
    currentWeatherRequest(city);
}


