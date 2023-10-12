import { useState, useContext, useEffect } from "react";
import { Outlet } from 'react-router-dom'
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  MenuItem,
  Menu
} from "@mui/material";
import { configContext } from '../context/configContext';
import DrawerComp from "./Drawer";
import { Footer } from "./Footer";
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";

export const Header = () => {
  const auth = getAuth();

  // valores globales
  const { usuario } = useContext(configContext)

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const history = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path) => {
    history(path);
  }
  // salida 
  const logOut = () => {
    Swal.fire({
      title: 'Cerrar Sesión?',
      text: "¿Estas seguro de salir?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            localStorage.removeItem('credenciales');
          }).catch((error) => {
            console.log(error);
          });
      }
    })
  }

  useEffect(() => {
    console.log('USUARIO', JSON.stringify(usuario));
    // console.log('UID', JSON.stringify(usuario.uid));
  }, [usuario]);

  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "2%" }}>
                Code View
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "1.3rem", }}>
                Powered by
                <img
                  src="https://seeklogo.com/images/O/openai-logo-F97AAA4254-seeklogo.com.png"
                  alt="ChatGPT Logo"
                  height={50}
                  style={{ marginLeft: '20px' }}
                />
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}

                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Informacíon" />
                <Tab label="¿Quienes somos?" />
                <Tab label="Contactos" />
              </Tabs>
              {usuario === null || usuario === 'Anonimo' ? (
                <Button onClick={() => navigateTo('/login')}>Iniciar Sesión</Button>
              ) : (
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    {usuario.email}
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Mi Historial</MenuItem>
                    <MenuItem onClick={logOut}>Salir</MenuItem>
                  </Menu>
                </div>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  )
}
