// Referencia: https://www.youtube.com/watch?v=_UXycMmVYj0&list=PLE9dKsjFKblJymWQGoBYINColZgOCcTJk&index=2&t=16s&ab_channel=TheIndianDev

import styled from "styled-components"

//Estilo del contenedor 1.
const Container = styled.div`
display:flex; 
flex-direction: column;
`

//Estilo del contenedor de la ciudad.
const CityComponent = styled.div`
display:flex; 
flex-direction: column;
`

//Estilo del contenedor del clima.
const WeatherComponent = styled.div`
display:flex; 
flex-direction: column;
`

function App() {
  return <Container>
  The Indian Dev
  <CityComponent>City component</CityComponent>
  <WeatherComponent>Weather component</WeatherComponent>
  </Container>
}

export default App;
