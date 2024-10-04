function fetchWeather(url, id) { // id is the element to update
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        return response.json();
    }).then((data) => {
        console.log(data);
        let element = document.getElementById(id);

        
        // Updates elemnt with fetched data
        element.innerHTML = `
            Temperature: ${data.current_weather.temperature} 
                         ${data.current_weather_units.temperature}<br>
            Windspeed:   ${data.current_weather.windspeed}
                         ${data.current_weather_units.windspeed}<br>
            It is: ${data.current_weather.is_day ? 'daytime' : 'nighttime'}<br>
         `;
    })
}

window.onload = function() { // Runs the code when the window is loaded
    let i = 1; // Counts updates

    // Fetches and updates weather data for the shown capitals
    fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=59.91270&longitude=10.74996&current_weather=true', 'oslo-data');
    fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=60.192059&longitude=24.945831&current_weather=true', 'helsinki-data');
    fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=52.520008&longitude=13.404954&current_weather=true', 'berlin-data');
    fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=50.85045&longitude=4.34878&current_weather=true', 'brussel-data');
    fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=52.237049&longitude=21.017532&current_weather=true', 'warsawa-data');
    
    setInterval(() => { // Interval function to update weather data
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=59.91270&longitude=10.74996&current_weather=true', 'oslo-data');
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=60.192059&longitude=24.945831&current_weather=true', 'helsinki-data');
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=52.520008&longitude=13.404954&current_weather=true', 'berlin-data');
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=50.85045&longitude=4.34878&current_weather=true', 'brussel-data');
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=52.237049&longitude=21.017532&current_weather=true', 'warsawa-data');
       
        // Updates the update counter
        document.getElementById("counter").innerText = `Updated ${i} time(s)`;
        console.log(`Updated! Total times updated: ${i++}`);
    }, 15000); // Updates weatherdata every 15 sec
}