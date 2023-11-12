import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { Button, Box, CircularProgress } from '@mui/material';
import { resetPassword } from '../services/firebaseController';
import Swal from 'sweetalert2';

export const RecuperarCuenta = () => {
  const [correo, setCorreo] = useState();
  const [errores, setErrores] = useState(false);
  const [loader, setLoader] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const history = useNavigate();
  const navigateTo = (path) => {
    history(path);
  };

  const enviar = async () => {
    if (correo === undefined || correo === null) {
      setErrores(true);
    } else {
      setLoader(true); // Activar el loader antes de enviar la solicitud
      const respuesta = await resetPassword(correo); // Espera a que se complete el restablecimiento

      if (respuesta.success) {
        setEnviado(true);
      } else {
        console.error('Error al enviar el correo de restablecimiento');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifique que sea el correo de registro',
        });
      }

      setLoader(false); // Desactivar el loader después de recibir una respuesta
    }
  };

  return (
    <div className="principal">
      <div className="RecuperarContraseña">
        <div className="contenido">
          <div className="titulo">
            <h2 className="titleR">Recuperar Contraseña</h2>
          </div>
          <div>
            <div className="descripcion">
              <h4 className="titleR">
                Ingresa su correo electrónico para recibir los siguientes pasos para ayudarte a recuperar tu cuenta!
              </h4>
              {!enviado ? (
                <>
                  <FormControl variant="standard">
                    <input
                      className="correo-send"
                      label="Correo"
                      placeholder="Correo electrónico"
                      type="text"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => {
                        setCorreo(e.target.value);
                      }}
                    />
                  </FormControl>
                  {errores ? (
                    <p style={{ marginTop: '-8px' }} className="Errores">
                      *Obligatorio
                    </p>
                  ) : (
                    <p></p>
                  )}
                  <div className="botones">
                    <Button onClick={() => navigateTo('/login')} variant="contained" color="error" className="btnCancelar">
                      Cancelar
                    </Button>
                    {loader ? (
                      <CircularProgress
                        size={44}
                        sx={{
                          color: 'blue',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          marginTop: '-12px',
                          marginLeft: '-12px',
                        }}
                      />
                    ) : (
                      <Button onClick={enviar} variant="contained" className="btnAceptar">
                        Continuar
                      </Button>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h4 className="titleR">Por favor, revise su correo electrónico</h4>
                  <div className="botones">
                    <Button onClick={() => navigateTo('/login')} variant="contained" className="btnAceptar">
                      Volver
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
