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

export const ChatResponse = () => {
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
  return (
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
                  <div className="message-header">Código Ingresado</div>
                  <div className="message-content">
                    <SyntaxHighlighter language="javascript"
                      style={vscDarkPlus}>
                      {response.codigo_respuesta}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className="chat-message">
                  <div className="message-header">Código de Respuesta</div>
                  <div className="message-content">
                    <SyntaxHighlighter language="javascript"
                      style={vscDarkPlus}>
                      {response.codigo_ingresado}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  )
}
