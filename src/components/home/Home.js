import React from 'react'

function Home() {

  const apiKey = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7097e4d7bdmshee9a06b5147d569p18048ejsn1cdc6692bd58',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
  };

const cityName = 'dhar'
  async function fetchData(city,options){
    
 try {
    const res =  await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options);
   const data = await res.json()
   console.log(data);
 } catch (error) {
  console.log(error);
  
 }
  }
  fetchData(cityName,apiKey)
  return (
    <div>
Aman
    </div>
  )
}

export default Home