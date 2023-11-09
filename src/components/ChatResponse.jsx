import React, { useState } from 'react'
import '../styles/Historial.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CommentIcon from '@mui/icons-material/Comment';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ChatResponse = () => {
  const [open, setOpen] = React.useState(false);
  const [bad, setBad] = React.useState(false);

  const [response] = useState({
    titulo: 'Funcion que ayuda a eliminar un medico',
    lenguaje: 'JavaScript', Herramienta: 'Junit', fecha_creacion: '10 de octubre de 2023',
    codigo_ingresado: ` @DeleteMapping("/{id}")
@Transactional
@Operation(summary = "Elimina un medico registrado - inactivo")
public ResponseEntity eliminarMedico(@PathVariable Long id) {
    Medico medico = medicoRepository.getReferenceById(id);
    medico.desactivarMedico();
    return ResponseEntity.noContent().build();
}`, codigo_respuesta: ` @DeleteMapping("/{id}")
@Transactional
@Operation(summary = "Elimina un medico registrado - inactivo")
public ResponseEntity eliminarMedico(@PathVariable Long id) {
    Medico medico = medicoRepository.getReferenceById(id);
    medico.desactivarMedico();
    return ResponseEntity.noContent().build();

    @Operation(summary = "Elimina un medico registrado - inactivo")
public ResponseEntity eliminarMedico(@PathVariable Long id) {
    Medico medico = medicoRepository.getReferenceById(id);
    medico.desactivarMedico();
    return ResponseEntity.noContent().build();
    
}`})

  const copiar = () => {
    try {
      navigator.clipboard.writeText(response.codigo_ingresado);
      setOpen(true);
    } catch (error) {
      setBad(true)
    }
  };

  const copiar2 = () => {
    try {
      navigator.clipboard.writeText(response.codigo_respuesta);
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
  };

  return (
    <>
      <div className="chat-containe">
        <div className='Detail-container'>
          <div className="chat-info">
            <div className="chat-info-row">
              <div className="time-icon">
                <CodeIcon />
                <span className="chat-info-value">{response.lenguaje}</span>
              </div>
              <div className="time-icon">
                <BuildIcon />
                <span className="chat-info-value">{response.Herramienta}</span>
              </div>
              <div className="time-icon">
                <CalendarMonthIcon />
                <span className="chat-info-value">{response.fecha_creacion}</span>
              </div>
            </div>
            <div className="time-icon">
              <CommentIcon />
              <span className="chat-info-value">{response.titulo}</span>
            </div>
          </div>

          <div>
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <div className="chat-message">
                    <div className="message-header">
                      <div> Código Ingresado</div>
                      <div  onClick={copiar} ><ContentCopyIcon  className='Icon-Copy'
                        sx={{ color: 'gray' }} />
                      </div>
                    </div>
                    <div className="message-content">
                      <SyntaxHighlighter language="javascript"
                        style={vscDarkPlus}
                        customStyle={{ minHeight: '330px' }}>
                        {response.codigo_ingresado}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="chat-message">
                    <div className="message-header">
                      <div> Código Ingresado</div>
                      <div onClick={copiar2}><ContentCopyIcon className='Icon-Copy'
                        sx={{ color: 'gray' }} />
                      </div></div>
                    <div className="message-content">
                      <SyntaxHighlighter language="javascript"
                        style={vscDarkPlus}
                        customStyle={{ minHeight: '330px' }}>
                        {response.codigo_respuesta}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Copiado en portapapeles!
          </Alert>
        </Snackbar>
    </>

  )
}
