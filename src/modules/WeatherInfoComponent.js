// Componente que busca la info del clima.
import styled from 'styled-components'

// Íconos del clima para el sunset, sunrise, humedad y viento.
export const WeatherInfoIcons = {
  sunset: "./icono/temp.svg",
  sunrise: "./icono/temp.svg",
  humidity: "./icono/humidity.svg",
  wind: "./icono/wind.svg",
  pressure: "./icono/pressure.svg",
}

// Íconos del clima.
export const WeatherIcons = {
  "01d": "./icono/sunny.svg",        // Código para cuando está despejado de día.
  "01n": "./icono/night.svg",        // Código para cuando está despejado de noche.
  "02d": "./icono/day.svg",          // Código para pocas nubes de día.
  "02n": "./icono/cloudy-night.svg", // Código para pocas nubes de noche.
  "03d": "./icono/cloudy.svg",       // Código para nubes dispersas de día.
  "03n": "./icono/cloudy.svg",       // Código para nubes dispersas de noche.
  "04d": "./icono/perfect-day.svg",  // Código para nublado de día.
  "04n": "./icono/cloudy-night.svg", // Código para nublado de noche.
  "09d": "./icono/rain.svg",         // Código para lluvia de día.
  "09n": "./icono/rain-night.svg",   // Código para lluvia de noche.
  "10d": "./icono/lluvia.svg",       // Código para lluvia de día. 
  "10n": "./icono/lluvia.svg",       // Código para lluvia de noche. 
  "11d": "./icono/storm.svg",        // Código para tormenda de día.
  "11n": "./icono/storm.svg",        // Código para tormenta de noche.
  "13d": "./icono/snow.svg",         // Código para nieve de día.
  "13n": "./icono/snow.svg",         // Código para nieve de noche.
  "50d": "./icono/tornado.svg",      // Código para otros eventos como tornados durante el día.
  "50n": "./icono/tornado.svg",      // Código para otros eventos como tornados durante la noche.
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
  
  // Obteniendo la hora del país que se buscó.
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
  }
  
  return (
    <>
      <WeatherCondition>
        <Condition><span>{`${Math.floor(weather?.main?.temp-273)}|°C`}</span> 
        {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} /> {/*Logo que se pone a la par de la temperatura*/}
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location> {/*Obteniendo la información del país*/}
      <WeatherInfoLabel>Información del clima</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherinfoComponent 
          name={isDay ? "sunset" : "sunrise"} /*Viendo si es de día o de tarde*/
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])} /*Ponienod la hora*/
        />
        <WeatherinfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherinfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherinfoComponent name="pressure" value={weather?.wind?.pressure} />
      </WeatherInfoContainer>
    </>
  )
}

export default WeatherComponent
