import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Swal from 'sweetalert2';
import { enviarMensaje } from '../services/ApiController';

export const Contact = () => {
  const [usuario, setUsuario] = useState();
  const [correo, setCorreo] = useState();
  const [mensaje, setMensaje] = useState();

  const history = useNavigate();
  const navigateTo = (path) => {
    history(path);
  }

  const limpiar= () => {
    setUsuario(null);
    setCorreo('');
    setMensaje('');
  }

  const envio = async () => {
    if (usuario === undefined || usuario == null || correo === undefined || correo == null || mensaje === undefined || mensaje == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Asegurese de que todos los campos sean completados",
      });
    }
    try {
      const response = await enviarMensaje(usuario, correo, mensaje);
      if (response && response.status === 'success') {
        setUsuario();
        setCorreo(null);
        setMensaje('');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Tu mensaje ha sido recibido. Pronto nos pondremos en contacto contigo",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        // Handle unexpected response or status
        throw new Error('Respuesta inesperada del servidor');
      }
    } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ha ocurrido algo. Intentalo mas luego",
        });
    }
  }
  return (
    <div className='  '>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={10} md={5}>
            <div className='contactanos'>
              <h2>Contactanos </h2>
              <div >
                <h4>Nos encantaría saber de ti. Si tienes alguna pregunta, reclamo o sugerencia,
                  por favor no dudes en ponerte en contacto con nosotros..</h4>
              </div>
              <div>
                <Paper sx={{ width: 250, maxWidth: '100%', background: 'none', color: 'white' }}>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <WhatsAppIcon fontSize="small" sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText>+(593) 979634005</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <AttachEmailIcon fontSize="small" sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText>jhoncuvi12@gmail.com</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <EditLocationIcon fontSize="small" sx={{ color: 'white' }} />
                      </ListItemIcon>
                      <ListItemText>Riobamba - Ecuador</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={5}>
            <div className='formulario'>
              <h3>Envianos un mensaje</h3>
              <form action="#" autoComplete="off">
                <div className='contentt'>
                  <div className="campo">
                    <PersonIcon sx={{ fontSize: 30 }} className='iconoPersona' />
                    <input type="text" name="nombre" placeholder="Tu Nombre"
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                  </div>
                  <div className="campo">
                    <AttachEmailIcon className='iconoPersona' sx={{ fontSize: 30 }} />
                    <input type="email" name="email" placeholder="Tu Email" required
                      onChange={(e) => setCorreo(e.target.value)} />
                  </div>
                </div>
                <textarea className='area' name="mensaje" placeholder="Tu Mensaje..."
                  onChange={(e) => setMensaje(e.target.value)}></textarea>
                <div className='btnStack2'>
                  <Button onClick={envio} className='btnStack' variant="contained">Enviar</Button>
                  <Button variant="outlined" onClick={limpiar}>Cancelar</Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
