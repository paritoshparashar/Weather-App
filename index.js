async function makeWeatherRequest () {

    let cityInput = document.getElementById("city");

    let city = cityInput.value;
    
    let forecast3Days = await fetch( `https://api.weatherapi.com/v1/forecast.json?key=4bf20ce3218b4f4c9aa144244240703&q=${city}&days=3&aqi=yes&alerts=yes` , {mode : 'cors'});

    let forecast3DaysObj = await forecast3Days.json();
    console.log(`Last Updated: ${forecast3DaysObj.current.last_updated}`)
    console.log(`Conditions: ${forecast3DaysObj.current.condition.text}`);
}

