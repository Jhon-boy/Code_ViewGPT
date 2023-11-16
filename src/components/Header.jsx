import { useState, useContext, useEffect } from "react";
import { Outlet, Link } from 'react-router-dom'
import LOGO from '../img/LOGO.png'
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
  Box,
  ListItemText, InputLabel ,
  Drawer, InputAdornment ,
  Divider, ListItem,
  List, ListItemButton,
  ListItemIcon, Menu, Input
} from "@mui/material";
import { configContext } from '../context/configContext';
import DrawerComp from "./Drawer";
import { Footer } from "./Footer";
import { useNavigate, useLocation } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { colorPrimario, colroSecundario } from "../pure/colors";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailIcon from '@mui/icons-material/Mail';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

export const Header = () => {
  const auth = getAuth();

  const location = useLocation();
  // valores globales
  const { usuario } = useContext(configContext)
  const [showPassword, setShowPassword] = useState(false);

  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const history = useNavigate();

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    setAnchorEl(null);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, right: open });
  };

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
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const list = () => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className="perfil">
        <List>

          <h3 style={{ color: colorPrimario }}>Tu cuenta</h3>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Usuario'} />
            </ListItemButton>
            <Divider />
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Contraseña</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </ListItemButton>
            <Divider />
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Usuario'} />
            </ListItemButton>
            <Divider />
          </ListItem>

        </List>
        <Divider />
      </div>

    </Box>
  );

  useEffect(() => {
    console.log('USUARIO ->', usuario);
  }, [usuario]);

  return (
    <>
      <AppBar sx={{ background: "black" }}>
        <Toolbar>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1rem", paddingLeft: "3%" }}>
                <img
                  src={LOGO}
                  alt="ChatGPT Logo"
                  height={60}
                  style={{ marginLeft: '20px' }}
                />
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "1.3rem", paddingLeft: "3%" }}>
                <img
                  src={LOGO}
                  alt="ChatGPT Logo"
                  height={60}
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
                <Link to='/'>
                  <Tab tabIndex="-1"
                    className={location.pathname === '/' ? 'selectItem active' : 'selectItem'}
                    label={<span span style={{ color: colroSecundario }}>Inicio</span>}
                  />
                </Link>
                <Link to='/infoPage'>
                  <Tab
                    tabIndex="-1"
                    className={location.pathname === '/infoPage' ? 'selectItem active' : 'selectItem'}
                    label={<span style={{ color: colroSecundario }}>Información</span>}
                  />
                </Link>
                <Link to='/contact'>
                  <Tab
                    tabIndex="-1"
                    className={location.pathname === '/contact' ? 'selectItem active' : 'selectItem'}
                    label={<span style={{ color: colroSecundario }}>Contáctos</span>} />
                </Link>
                <Link to='help' >
                  <Tab
                    disableFocusRipple
                    className={location.pathname === '/help' ? 'selectItem active' : 'selectItem'}
                    label={<span style={{ color: colroSecundario }}>Ayuda</span>} />
                </Link>
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
                    <span style={{ color: colorPrimario }}>{usuario.email}</span>
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
                    <MenuItem className="select" onClick={toggleDrawer(true)}>Perfil</MenuItem>
                    <Link to='historial'>
                      <MenuItem className="select" style={{ color: 'black' }} onClick={handleClose}>
                        Historial
                      </MenuItem>
                    </Link>
                    <Link  >
                      <MenuItem className="select" style={{ color: 'black' }} onClick={logOut}>Salir</MenuItem>
                    </Link>

                  </Menu>
                </div>
              )}
            </>
          )}
        </Toolbar>
      </AppBar >
      <div>
        <Button onClick={toggleDrawer(true)}>Open Right</Button>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
