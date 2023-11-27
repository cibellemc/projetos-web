import { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment';

function App() {
  const [horaInicio, setHoraInicio] = useState(moment().format('HH:mm'))
  const [intervalo, setIntervalo] = useState("01:15")
  const [tempoRestante, setTempoRestante] = useState("1:15")
  // const [darkMode, setDarkMode] = useState(false);


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

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div style={{ backgroundImage: `url('/images/Work time-pana.png')` }}>
      {/* <header className={`anonima ${darkMode ? 'dark-mode' : ''}`}> */}
      <header className="anonima">
        <div className="wrapper">
          <a href="/">
            <img
              src="https://portal.pi.gov.br/ati/wp-content/uploads/sites/2/2021/11/Logo_Piaui_Conectadoo-01-1024x445.png"
              className="logo-instituicao"
              alt="Logo da Piauí Conectado"
              aria-hidden="true"
            />
          </a>
          {/* <button className="dark-mode" onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
          <p>Simule o retorno da sua pausa</p>
        </div>
      </header>

      {/* <div className={`container ${darkMode ? 'dark-mode' : ''}`} style={{display: "flex", gap: "4rem"}}> */}
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
{/* 
        <div className='imagem'>
          <img
            src="/work-time.png"
            alt="Imagem"
            aria-hidden="true"
          />
        </div> */}

        <div className='formulario-ponto' style={{ display: "flex" }}>
          <div>
            <h2>Hora do ponto:</h2>
            <input type="time" onChange={handleOnChange} value={horaInicio} id="" />
          </div>

          <div>
            <h2>Tempo reservado para intervalo:</h2>
            <input type="time" onChange={handleChangeIntervalo} value={intervalo} id="" />
          </div>

          <div>
            <h2>Volta às {horaRetorno}</h2>
            <h2>Tempo restante: {tempoRestante}</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
