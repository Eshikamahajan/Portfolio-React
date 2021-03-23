import React, { useState } from 'react';
import '../scss/weather.css'

const api = {
  key: "a1ff05f92d6e38742a88223911ae000a",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {

            setWeather(result);
            setQuery('');
            
        });
    }
  }


  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp-273 > 16) ? 'app hot' : 'app cold') : 'app cold'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
           
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp-273)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;