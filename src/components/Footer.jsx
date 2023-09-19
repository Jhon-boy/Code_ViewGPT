import React from 'react'
import '../index.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import CopyrightIcon from '@mui/icons-material/Copyright';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DraftsIcon from '@mui/icons-material/Drafts';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-inicio'>
      <div>
          <Grid container spacing={2}>
          <Grid xs={12} md={9} >
            <h4 className='aviso'>Puedes contactarnos por nuestras redes sociales en caso de cualquier situación u otros aspectos!</h4>
          </Grid>
          <Grid xs={12} md={3}>
            <Grid container className='footer-iconos'>
              <FacebookOutlinedIcon className='icons' />
              <GitHubIcon className='icons'/>
              <InstagramIcon className='icons'/>
              <WhatsAppIcon className='icons'/>
              <LinkedInIcon className='icons'/>
            </Grid>
          </Grid>
        </Grid>
      </div>
      
      </div>
      <div className='footer-contacts'>
        <Grid container spacing={2}>
          {/* COMPANIA NOMBRE */}
          <Grid item xs={5} md={4} xl={3}>
            <h4>JOHN`S TEAM</h4>
            <h4 className='informacion'>Somos un equipo dedicado al desarrollo de software de calidad, comprometido, resposable sobreponiendo el bienestar del ser humano. </h4>

          </Grid>
          {/* PRODUCTOS  */}
          <Grid item xs={4} md={2.5} xl={3}>
            <h4>PRODUCTOS</h4>
            <List>
              <ListItem disablePadding>
                <ListItemButton href="#simple-list">
                  <ListItemText primary="RentaCAR - API" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Code View" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Pokemon View" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary="Hotel Alura" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          {/* LINKS DE ACCESO */}
          <Grid item xs={5} md={2.5} xl={3}>
          <h4>NEGOCIOS</h4>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon className='icons-contacts'/>
                </ListItemIcon>
                <ListItemText primary="Enviar Mail" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <DraftsIcon className='icons-contacts' />
                </ListItemIcon>
                <ListItemText primary="Ayuda" />
              </ListItemButton>

            </List>
          </Grid>
          {/* CONTACTOS  */}
          <Grid item xs={4} md={3} xl={3}>
          <h4>+ INFORMACIÓN</h4>
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <AttachEmailIcon className='icons-contacts'/>
                </ListItemIcon>
                <ListItemText primary="jhoncuvi12@gmail.com" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <WhatsAppIcon className='icons-contacts'/>
                </ListItemIcon>
                <ListItemText primary="+593 979634005" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <TravelExploreIcon className='icons-contacts'/>
                </ListItemIcon>
                <ListItemText primary="Riobamba - Ecuador" />
              </ListItemButton>

            </List>

          </Grid>
        </Grid>


      </div>
      <div className='footer-copyright'>
        <center>
          <CopyrightIcon className='icons' />2023 Copyright: Jhon´s Team
        </center>
      </div>
    </div>
  )
}
