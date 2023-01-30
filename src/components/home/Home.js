import React from 'react'

function Home() {

  const apiKey='ad00226a52d14ad0fd5c6959889baa7e'
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
      console.log(data);     
     } catch (error) {
      console.log(error);     
     }
  }
  fetchGeoCordinate('Dhar')

  return (
    <div className='Home'>
      

    </div>
  )
}

export default Home