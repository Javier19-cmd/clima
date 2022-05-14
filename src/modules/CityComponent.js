import styled from 'styled-components'

/* Propiedades del logo */
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`
/* Propiedades del texto que dice escoge tu ciudad */
const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`

const SearchoBox = styled.form`
  /*Estilo del searchbox*/
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
  font-weight: bold;
  margin: 20px auto;

  /*Estilo del input*/
  & input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  /*Estilo del botón*/

  & button{
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`

const CityComponent = () => {
    return (
      <>
        <WeatherLogo src="./icono/perfect-day.svg" />
        <ChooseCityLabel>Busca el clima de tu país</ChooseCityLabel>
        <SearchoBox>
          <input placeholder="Ciudad"/>
          <button>Buscar</button>
        </SearchoBox>
      </>
    )
}

export default CityComponent;
