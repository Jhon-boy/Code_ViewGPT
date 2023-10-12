import * as React from 'react';

import RestoreIcon from '@mui/icons-material/Restore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import { configContext } from '../context/configContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { GuardarRegistro } from '../services/firebaseController';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Options = () => {
  const [registro, setRegistros] = React.useState({codigo_ingresado: '', codigo_respuesta: '',
   fecha_creacion: '', herramienta: '', lenguaje: '', titulo: '', usuario: ''});
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [bad, setBad] = React.useState(false);
  const { setLenguaje, setDescripcion, setTool, setResponse, setLoading, setCodigo, response } = React.useContext(configContext);
  const { lenguaje, descripcion,tool, codigo, usuario } = React.useContext(configContext);

  const copiar = () => {
    try {
      navigator.clipboard.writeText(response);
      setOpen(true);
    } catch (error) {

    }
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const limpiar = () => {
    setLenguaje('');
    setDescripcion('');
    setTool('');
    setCodigo('');
    setResponse('');  
  }


  const Guardar = async() => {
    console.log('holaa')
    registro.codigo_ingresado = codigo;
    registro.codigo_respuesta = response;
    registro.fecha_creacion = new Date();
    registro.herramienta = tool;
    registro.lenguaje = lenguaje;
    registro.titulo = descripcion;
    registro.usuario = JSON.stringify(usuario.uid);
 
    try {
      await GuardarRegistro(registro).catch(e =>{
        setBad(true);
      })
      setCopy(true);
    } catch (error) {
      setBad(true);
    }
  }
  return (
    <>
      <div className="container-navigation">
        <div className="bottomNavigation">
          <div className="navItem">
            <div onClick={limpiar}>
              <RestoreIcon />
            </div>
            <div>
              <span className="label">Intentar de nuevo</span>
            </div>
          </div>
          <div className="navItem" onClick={copiar}>
            <div>
              <ContentCopyIcon />
            </div>
            <span className="label">Copiar</span>

          </div>
          <div className="navItem" onClick={Guardar}>
            <div><SaveIcon /></div>
            <span className="label">Guardar</span>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copiado en portapapeles!
        </Alert>
      </Snackbar>
      <Snackbar open={copy} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Guardado, revise su historial!
        </Alert>
      </Snackbar>
      <Snackbar open={bad} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Upps! Algo salio mal, Intentelo luego!
        </Alert>
      </Snackbar>
      </Stack>
      
    </>


  )
}
