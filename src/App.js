// Referencia: https://www.youtube.com/watch?v=_UXycMmVYj0&list=PLE9dKsjFKblJymWQGoBYINColZgOCcTJk&index=2&t=16s&ab_channel=TheIndianDev

import styled from "styled-components"
import CityComponent from "./modules/CityComponent"
import WeatherComponent from "components/WeatherComponent"

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
  return <Container>
  <AppLabel>React Weather App</AppLabel>
  <CityComponent />
  <WeatherComponent />
  </Container>
}

export default App;
