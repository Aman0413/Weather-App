import React, { useEffect, useState } from 'react'
import './Home.scss'
import img from '../../assets/weather.png'

function Home() {

  const apiKey='ad00226a52d14ad0fd5c6959889baa7e'
   const [searchCity,setSearchCity]=useState('Delhi');
   const [temp ,setTemp]=useState('')
  const [city ,setCity]=useState('')

  const [feels,setFeels]=useState('')
  const [desc,setDesc]=useState('')
  const [min,setMin]=useState('')
  const [max,setMax]=useState('')
  const [humidity,setHumidity]=useState('')

  useEffect(()=>{
   fetchGeoCordinate(searchCity)
  },[])

  
  async function fetchGeoCordinate(city){
      const geoCordinateUrl =`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${3}&appid=${apiKey}`
    try {
      const res = await fetch(geoCordinateUrl);
      const data = await res.json()
      fetchWeatherData(data[0].lat,data[0].lon)     
    }
     catch (error) {
      console.log(error);     
    }
  }
  async function fetchWeatherData(lat ,lon){
     const apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
     try {
      const res = await fetch(apiUrl);
      const data = await res.json()    
      setCity(data.name )
      const kelvinValue =data.main.temp
      setTemp(Math.floor( kelvinValue - 273.15))
      setMax(Math.floor(data.main.temp_max - 273.15))
      setMin(Math.floor(data.main.temp_min - 273.15))
      setFeels(Math.floor(data.main.feels_like - 273.15))
      setDesc(data.weather[0].main)
      setHumidity(data.main.humidity)
     } catch (error) {
      console.log(error);     
     }
  }


  return (
    <div className='Home'>
     <div className="container">
         <div className="search">
            <input type="text" onChange={(e)=>{
               setSearchCity(e.target.value)
                
            }} />
            <button onClick={()=>{
              fetchGeoCordinate(searchCity)
            }}>Search</button>
         </div>
         <div className="search-result">
            <div className="city-name">
               <div className='city-data'>
                  <h2 className='city-heading'>{city}</h2>
                  <p>Feels like {feels} <sup>o</sup>C </p>
                  <p>{desc}</p>
               </div>
               <div className="image">
                  <img src={img} alt="" />
               </div>
               
            </div>
            <h2 className='temp-heading'>{temp}<sup>o</sup>C </h2>
            <p>Humidity {humidity}%</p>
            <div className='min-max'>
               <div>
                  <p>Min</p>
                  <p>{min} <sup>o</sup>C </p>
               </div>
               <div>
                  <div className='line'></div>
               </div>
               <div>
                  <p>Max</p>
                  <p>{max}<sup>o</sup>C </p>
               </div>
            </div>
         </div>
     </div>
    </div>
  )
}

export default Home