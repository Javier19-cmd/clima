// Componente que busca la info del clima.
import styled from 'styled-components'

export const WeatherInfoIcons = {
  sunset: "./icono/temp.svg",
  sunrise: "./icono/temp.svg",
  humidity: "./icono/humidity.svg",
  wind: "./icono/wind.svg",
  pressure: "./icono/pressure.svg",
}

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

/*Contenedor de la info del clima*/
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

/* Propiedades del infoContainer */
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

/* Propiedades de los íconos */
const InfoIcon = styled.img`
  width: 36px;
  height: 36px; 
`

/*Propiedades de los labels de la info*/
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`

/*Función que obtendrá el clima*/
const WeatherinfoComponent = (props) => {
  const { name, value } = props
  return(
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]}/>
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  )
}

const WeatherComponent = (props) => {
  
  const { weather } = props
  const isDay = weather?.weather[0].icon?.includes('d')
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 100).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  
  return (
    <>
      <WeatherCondition>
        <Condition><span>{`${Math.floor(weather?.main?.temp-273)}|°C`}</span> 
        {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src="./icono/perfect-day.svg" />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Información del clima</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherinfoComponent 
          name={isDay ? "Sunset" : "sunrise"} 
          value={getTime(weather?.sys[isDay ? "Sunset" : "sunrise"])}
        />
        <WeatherinfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherinfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherinfoComponent name="pressure" value={weather?.wind?.pressure} />
      </WeatherInfoContainer>
    </>
  )
}

export default WeatherComponent
