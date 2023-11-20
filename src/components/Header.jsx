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
  Button, Fab,
  MenuItem,
  Box, TextField,
  ListItemText, InputLabel,
  Drawer, InputAdornment,
  Divider, ListItem,
  List,
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
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { deleteCount, updatePass } from "../services/firebaseController.js";
import Avatar from '@mui/material/Avatar';
import { FormatColorResetRounded } from "@mui/icons-material";
import { Loader } from "./Loader.jsx";

export const Header = () => {
  const auth = getAuth();

  const user = auth.currentUser;

  const location = useLocation();
  // valores globales
  const { usuario } = useContext(configContext)
  const [newPass, setNewPass] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const history = useNavigate();

  const [state, setState] = useState({
    right: false,
  });

  useEffect(() => {
    console.log('USUARIO ->', usuario);
  }, [usuario]);

  const toggleDrawer = (open) => (event) => {
    setAnchorEl(null);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setEdit(false);
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
        setLoading(true);
        setTimeout(() => {
          signOut(auth)
            .then(() => {
              localStorage.removeItem('credenciales');
              window.location.reload();
              setLoading(false);
            }).catch((error) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ha ocurrido algo. Inténtalo más tarde",
              });
            });
        }, 3000)

      }
    })
  }


  const email = usuario ? usuario.email : 'Anonimo';
  const fechaCreacion = usuario && usuario.metadata ? usuario.metadata.creationTime : '';
  const fechaActualizacion = usuario && usuario.metadata ? usuario.metadata.lastLoginAt : '';
  const lastLoginAtDate = usuario && usuario.metadata ? new Date(parseInt(fechaActualizacion)) : null;
  const customFormatted = lastLoginAtDate ? lastLoginAtDate.toLocaleDateString() : '';

  const usuarioGmail = usuario ? usuario.displayName : '';
  const fotoUrl = usuario ? usuario.photoURL : '';

  const creationTimeDate = new Date(fechaCreacion);

  const formatted = creationTimeDate.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const eliminar = async () => {
    setState(false);
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará tu cuenta de forma permanente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {

      if (result.isConfirmed) {
        try {
          deleteCount(user);
          localStorage.removeItem('credenciales');
          setLoading(true);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tu cuenta ha sido eliminada!",
            showConfirmButton: false,
            timer: 1800,
            didDestroy: async () => {
              window.location.reload();
            }
          });
        } catch (e) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ha ocurrido algo. Inténtalo más tarde",
          });
        }
      }
    })
  }
  const upDate = async () => {
    setEdit(true)
    try {
      await updatePass(user, newPass);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Contraseña actualizada. Inicie sesión nuevamente por favor",
        showConfirmButton: false,
        timer: 1800,
        didDestroy: async () => {
          await signOut(auth);
          localStorage.removeItem('credenciales');
          navigateTo('/login');
        }
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido algo. Inténtalo más tarde",
      });
    };

  }
  useEffect(() => {
    if (newPass.length >= 8) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [newPass]);

  const list = () => (
    <Box
      sx={{ width: 330 }}
      role="presentation"
    >
      <div className="perfil">
        <List>

          <h3 style={{ color: colorPrimario }}>Tu cuenta</h3>
          <Divider>

          </Divider>
          {
            usuarioGmail && (
              <ListItem>
                <ListItemIcon>
                  <Avatar alt={usuario.email} src={fotoUrl} />
                </ListItemIcon>
                <Input defaultValue={usuarioGmail} />
              </ListItem>
            )
          }
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <TextField id="outlined-basic" label="Correo" variant="outlined" defaultValue={email}>
            </TextField>
          </ListItem>
          <Divider />
          {
            edit && !usuarioGmail && (
              <ListItem>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Nueva Contraseña
                  </InputLabel>

                  <Input
                    onChange={(e) => {
                      setNewPass(e.target.value);
                    }}
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
                    error={newPass.length < 8}
                    helperText={
                      newPass.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : ''
                    }
                  />
                </FormControl>

                <Divider />
              </ListItem>
            )
          }

          <ListItem>
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <TextField disabled id="outlined-basic" label="Fecha de creación" variant="outlined" InputLabelProps={{
              style: {
                color: 'black'
              }
            }} defaultValue={formatted}>
            </TextField>
            <Divider />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SystemUpdateAltIcon />
            </ListItemIcon>
            <TextField disabled id="outlined-basic" label="Última conexión" variant="outlined" InputLabelProps={{
              style: {
                color: 'black'
              }
            }} defaultValue={customFormatted}>
            </TextField>
            <Divider />
          </ListItem>
        </List>
        <Divider />
        {
          !edit ? (
            <Box sx={{ '& > :not(style)': { m: 3 } }}>
              <center>
                <Fab color="primary" aria-label="edit" onClick={(e) => setEdit(true)} >
                  <EditIcon />
                </Fab>
                <Fab variant="extended" onClick={() => {
                  eliminar()
                }}>
                  Eliminar Cuenta
                </Fab>
              </center>

            </Box>
          ) : (
            <>
              {
                usuarioGmail ? (
                  <Box sx={{ '& > :not(style)': { m: 3 } }}>
                    <center>
                      <Fab variant="extended">
                        Cerrar Sesión
                      </Fab>
                    </center>

                  </Box>
                ) : (
                  <Box sx={{ '& > :not(style)': { m: 3 } }}>
                    <center>
                      <Fab color="error" aria-label="cancel" onClick={(e) => setEdit(false)}>
                        <ClearIcon />
                      </Fab>
                      <Fab variant="extended" color="primary" onClick={() => {
                        upDate()
                      }}
                        disabled={btnDisabled}>
                        Actualizar Datos
                      </Fab>
                    </center>

                  </Box>
                )
              }
            </>
          )
        }

      </div>
    </Box >
  );


  return (
    <>
      <AppBar sx={{ background: "black" }}>
        {
          loading ? (
            <Loader />
          )
            : (
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
                      <Button onClick={() => navigateTo('/login')} color="primary" variant="contained">Iniciar Sesión</Button>
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
            )
        }

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
