import React, { useState } from 'react';
import Popup from './components/Popup';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
   
  });


}
const api = {
  key: "0dcf13bb6f1befe8b6a9a2802a866756",
  base: "https://api.openweathermap.org/data/2.5/"}

  function setData(props)
  {
    const details = props
  }


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [buttonPopup, setButtonPopup]=useState(false);
  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
      setData(result)
          setQuery('');
          console.log(result);

        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  
  return (

    <div className={
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16)
          ? 'App warm'
          : 'App')
        : 'App'}>
      <main>

      <nav className="navbar navbar-expand-lg navbar-light bg-light" fixed-top >
  <div className="container-fluid">
    <a className="navbar-brand"><img src="https://cdn1.iconfinder.com/data/icons/search-29/64/cloud-512.png" width="35" height="35"></img></a>  
    <a className="navbar-brand" href="#">WeatherSearch</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="https://www.indiatvnews.com/topic/weather-forecast">News</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disable" href="#">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <div className="search-box expand-lg">
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
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
              <div className="weather">{weather.weather[0].main}</div>
              </div>
             </div>



        ) : ('')}
        <div className="App" style={{textAlign:'center' ,background:'transparent'}} >
        <br/>
<button className="btn btn-info" onClick={()=>setButtonPopup(true)} >Weather Details</button>



<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
<div className="weatherdetails">
            <div className="section1" style={{textAlign:"left"}}>
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                
        {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {Math.round(weather.main.temp )}/ {Math.round(weather.main.temp-1)}°c</div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  
                  </td>
                  <td>
                         
        {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weather.main.humidity }%</div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Pressure</h4>
                  </td>
                  <td>
                  {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weather.main.pressure } hPa</div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                  {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {weather.visibility / 1000} Km</div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2" style={{textAlign: "left"}}>
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                  {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >&nbsp;
              {Math.round((weather.wind.speed * 18) / 5)} km/hr
                  </div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Wind Direction</h4>
                  </td>
                  <td>
                  {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >&nbsp; {weather.wind.deg}
                      <sup>o</sup> deg</div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                  {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >
              &nbsp; {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                  </div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                 {(typeof weather.main != "undefined") ? (
          <div>
            <div >
              <div >
              &nbsp; {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                  </div>
              
            </div>
           
             </div>



        ) : ('')}
                  </td>
                </tr>
              </table>
            </div>
          </div>

</Popup>
</div>
   
        
      </main>
     </div>
    );
};

export default App;