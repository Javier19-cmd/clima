// Referencia: https://www.youtube.com/watch?v=_UXycMmVYj0&list=PLE9dKsjFKblJymWQGoBYINColZgOCcTJk&index=2&t=16s&ab_channel=TheIndianDev

import styled from "styled-components"
import CityComponent from "./modules/CityComponent"
import WeatherComponent from "./modules/WeatherInfoComponent"
import { useState } from "react"
import axios from "axios"

//Estilo del contenedor 1.
const Container = styled.div`
  display:flex; 
  flex-direction: column;
  margin:auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`
//Estilo del contenedor del clima.
const AppLabel = styled.span`
  color:black;
  font-size: 18px;
  font-weight: bold;
`

function App() {
  
  // Estados de la ciudad y del clima.

  const [city, updateCity] = useState()
  const [weather, updateWeather] = useState()

  // Método que servirá para llamar al API.
  const fetchWeather = async (e) => {
    e.preventDefault()
   const response = 
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
   updateWeather(response.data)
  }

  return (
  <Container>
    <AppLabel>Aplicación para el clima</AppLabel>
    {weather ? (

    <WeatherComponent weather={weather}/>
    
    ) 
    : (
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
  </Container>
  )
}

export default App;
