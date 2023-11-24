import { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment';

function App() {
  const [horaInicio, setHoraInicio] = useState(moment().format('HH:mm'))
  const [intervalo, setIntervalo] = useState("01:15")
  const [tempoRestante, setTempoRestante] = useState("1:15")

  const horaRetorno = moment(horaInicio, 'HH:mm').add(moment(intervalo, 'HH:mm').hours(), 'hours').add(moment(intervalo, 'HH:mm').minutes(), 'minutes').format('HH:mm');
  const claculoTempoRestante = moment(horaRetorno, 'HH:mm').subtract(moment().format('HH:mm')).subtract(moment(horaInicio).format('HH:mm')).format('HH:mm');

  useEffect(() => {
    const agora = moment().format("HH:mm");

    // se o input do usuário é de hora no futuro
    if (moment(horaInicio, 'HH:mm').isAfter(moment(agora, 'HH:mm'))) {
      setTempoRestante("01:15")
    // se a hora atual é menor que a hora de retorno
    } else if (moment(agora, 'HH:mm').isBefore(moment(horaRetorno, 'HH:mm'))) {
      setTempoRestante(claculoTempoRestante)
    } else {
      setTempoRestante("00:00")
    }
  })

  function handleOnChange(event: { target: { value: any; }; }) {
    const inputValue = event.target.value;

    if (inputValue !== undefined && inputValue.trim() !== '' && /^([01]\d|2[0-3]):([0-5]\d)$/.test(inputValue)) {
      setHoraInicio(inputValue);
    }
  }

  function handleChangeIntervalo(event: { target: { value: any; }; }) {
    const inputValue = event.target.value;

    if (inputValue !== undefined && inputValue.trim() !== '' && /^([01]\d|2[0-3]):([0-5]\d)$/.test(inputValue)) {
      setIntervalo(inputValue);
    }
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
      <h2>Tempo restante: {tempoRestante}</h2>

    </div>
  )
}

export default App
