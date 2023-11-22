import { useState } from 'react'
import './App.css'
import moment from 'moment';

function App() {
  const [horaInicio, setHoraInicio] = useState(moment().format('HH:mm'))
  const [intervalo, setIntervalo] = useState("01:15:00")

  const horaRetorno = moment(horaInicio, 'HH:mm').add(moment(intervalo, 'HH:mm').hours(), 'hours').add(moment(intervalo, 'HH:mm').minutes(), 'minutes').format('HH:mm');

  function handleOnChange(event: { target: { value: any; }; }) {
    setHoraInicio(event.target.value);
  }


  function handleChangeIntervalo(event: { target: { value: any; }; }) {
    setIntervalo(event.target.value);
  }

  return (
    <div className='container '>
      <div>
        <h2>Hora do ponto:</h2>
        <input type="time" onChange={handleOnChange} value={horaInicio} id="" />
      </div>
      <div>
        <h2>Tempo reservado para intervalo:</h2>
        <input type="time" onChange={handleChangeIntervalo} value={intervalo} id="" />
      </div>
      <h2>Volta às {horaRetorno}</h2>

    </div>
  )
}

export default App