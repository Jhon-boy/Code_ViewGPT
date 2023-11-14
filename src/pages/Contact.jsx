import React from 'react'
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

export const Contact = () => {
  const history = useNavigate();
  const navigateTo = (path) => {
    history(path);
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
                        <WhatsAppIcon fontSize="small" sx={{color: 'white'}} />
                      </ListItemIcon>
                      <ListItemText>+(593) 979634005</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <AttachEmailIcon fontSize="small" sx={{color: 'white'}}  />
                      </ListItemIcon>
                      <ListItemText>jhoncuvi12@gmail.com</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <EditLocationIcon fontSize="small" sx={{color: 'white'}}  />
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
                    <input type="text" name="nombre" placeholder="Tu Nombre" />
                  </div>
                  <div className="campo">
                    <AttachEmailIcon className='iconoPersona' sx={{ fontSize: 30 }} />
                    <input type="email" name="email" placeholder="Tu Email" />
                  </div>
                </div>
                <textarea className='area' name="mensaje" placeholder="Tu Mensaje..."></textarea>
                <div className='btnStack2'>
                  <Button className='btnStack' variant="contained">Enviar</Button>
                  <Button variant="outlined">Cancelar</Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
