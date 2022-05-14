// Componente que busca la info del clima.
import styled from 'styled-components'

/*Propiedades del climna*/
const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`
/* Propiedades de la condición */
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span{
    font-size: 28px;
  }
`

/* Propiedades del logo */
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`
/*Propiedades de la ubicación*/
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`

/*Propiedades de la información de la info del clima*/
const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align:start;
  width: 90%;
`

const WeatherComponent = () => {
  return (
    <>
      <WeatherCondition>
        <Condition><span>30 C</span> | Soleado
        </Condition>
        <WeatherLogo src="./icono/perfect-day.svg" />
      </WeatherCondition>
      <Location>London, GB</Location>
      <WeatherInfoLabel>Información del clima</WeatherInfoLabel> 
    </>
  )
}

export default WeatherComponent
