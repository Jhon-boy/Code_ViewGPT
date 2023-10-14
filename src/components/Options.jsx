import * as React from 'react';

import Box from '@mui/material/Box';
import RestoreIcon from '@mui/icons-material/Restore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SaveIcon from '@mui/icons-material/Save';
import { configContext } from '../context/configContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { GuardarRegistro } from '../services/firebaseController';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Options = () => {
  const [registro, setRegistros] = React.useState({
    codigo_ingresado: '', codigo_respuesta: '',
    fecha_creacion: '', herramienta: '', lenguaje: '', titulo: '', usuario: ''
  });
  const [open, setOpen] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [bad, setBad] = React.useState(false);
 
  const [load, setLoad] = React.useState(false);
  const { setLenguaje, setDescripcion, setTool, setResponse, setLoading, setCodigo, response } = React.useContext(configContext);
  const { lenguage, descripcion, tool, codigo, usuario } = React.useContext(configContext);

  const copiar = () => {
    try {
      navigator.clipboard.writeText(response);
      setOpen(true);
    } catch (error) {
      setBad(true)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setCopy(false);
    setBad(false);
  };

  const limpiar = () => {
    setLenguaje('');
    setDescripcion('');
    setTool('');
    setCodigo('');
    setResponse('Vamos de nuevo');
  }


  const Guardar = async () => {
    setLoad(true);
    registro.codigo_ingresado = codigo;
    registro.codigo_respuesta = response;
    registro.fecha_creacion = new Date();
    registro.herramienta = tool;
    registro.lenguaje = lenguage;
    registro.titulo = descripcion;
    registro.usuario = JSON.stringify(usuario.uid);

    try {
      await GuardarRegistro(registro);
      setCopy(true);
      setLoad(false);
    } catch (error) {
      console.error('Error al intentar guardar el registro:', error);
      setBad(true);
    }
  }

  return (
    <>
      <div className="container-navigation">
        <div className="bottomNavigation">
          <div className="navItem" onClick={limpiar}>
            <div >
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
          <Box sx={{ m: 1, position: 'relative' }}>
            <div className="navItem" onClick={Guardar}>
              <div><SaveIcon /></div>
              <span className="label">Guardar</span>
              {load && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </div>
          </Box>

        </div>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Copiado en portapapeles!
          </Alert>
        </Snackbar>
        <Snackbar open={copy} autoHideDuration={3500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Guardado, revise su historial!
          </Alert>
        </Snackbar>
        <Snackbar open={bad} autoHideDuration={3500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Upps! Algo salio mal, Intentelo luego!
          </Alert>
        </Snackbar>
      </Stack>

    </>


  )
}
