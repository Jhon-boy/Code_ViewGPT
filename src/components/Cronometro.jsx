import React, { useState, useEffect } from 'react';
import '../styles/cronometro.css';  // Asegúrate de ajustar la ruta correcta

export const Cronometro = ({ isLoadingDate }) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    let intervalo;
    let timeoutId;

    if (isLoadingDate) {
      // Solo inicia el intervalo si isLoadingDate es true
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    } else {
      // Establece un temporizador para borrar los datos después de 10 segundos
      timeoutId = setTimeout(() => {
        setSegundos(0);
      }, 10000);
    }

    // Limpia el intervalo al desmontar el componente o cuando isLoadingDate sea true
    return () => {
      clearInterval(intervalo);
      clearTimeout(timeoutId);
    };
  }, [isLoadingDate]);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  return (
    <>  
      {segundos !=0 ?
        <div className="clock-container">
          <h1 className="clock-title">Cronómetro</h1>
          <p className="clock-time">
            Tiempo: <span className='clock-number'>{minutos}</span> minutos y <span className='clock-number'>{segundosRestantes}</span> segundos
            <span className="clock-indicator"></span>
          </p>
        </div>
        : <div></div>
      }
    </>

  );
};
