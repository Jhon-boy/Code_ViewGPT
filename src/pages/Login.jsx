import React, { useContext, useState, } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Box, useMediaQuery, useTheme, Divider } from '@mui/material/'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import '../index.css'
import { useNavigate } from 'react-router-dom'
import IconGoole from '../services/IconGoole.png'
import Swal from 'sweetalert2';
import { auth, provider } from '../services/firebase'
import { configContext } from '../context/configContext';
import { Loader } from '../components/Loader';


export const Login = () => {

    const { setUsuario } = useContext(configContext);
    const [emailRef, setEmailRef] = useState('');
    const [passwordRef, setPasswordRef] = useState('');
    const [loading, setLoading] = useState(false);

    const paperStyle = { padding: 20, margin: "30px auto", height: "auto", width: "320px" }
    const avatarStyle = {
        backgroundColor: 'gray',
        height: '70px',  // Altura mediana de 50px (puedes ajustar según tu necesidad)
        width: '70px'    // Ancho mediano de 50px (puedes ajustar según tu necesidad)
    };
    const btnstyle = { margin: '8px 0' }
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const isDisabled = emailRef == '' || passwordRef == '';

    // navegador 
    //Funcion de routers para la navegacion 
    const history = useNavigate();
    const navigateTo = (path) => {
        history(path);
    }

    const loginGoole = async () => {
        try {
            await signInWithPopup(auth, provider).then((data) => {
                setUsuario(data.user.email);
                localStorage.setItem('credentials', auth);
                sessionStorage.setItem('credentials', auth);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 3500,
                    timerProgressBar: true

                })
                navigateTo('/');
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verifique correo o contraseña',
            })
        }
    };
    const iniciarSesion = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, emailRef, passwordRef).then((data) => {
                setUsuario(data.user.email);
                localStorage.setItem('credentials', auth);
                sessionStorage.setItem('credentials', auth);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true
                });
                navigateTo('/');
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Verifique correo o contraseña',
            });
            setLoading(false);
        } finally {
            // Independientemente del resultado, establece loading a false después del tiempo simulado
            setTimeout(() => {
                setLoading(false);
            }, 5000);
        }
    };

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className='login'>

                        <Button onClick={() => navigateTo('/')} style={{ marginLeft: '40px', marginTop: '10px' }}>Volver</Button>
                        <Box sx={{ flexGrow: 2 }} height="103vh">
                            <Grid container spacing={3}>
                                {isMatch ? (
                                    <>
                                    </>
                                ) : (<>
                                    <Grid item xs={12} md={6}>
                                        <div className='portada'>
                                            <img alt='portada-img' className='portada-img' src='https://quodem.com/wp-content/uploads/2022/03/Software-outsourcing.jpg' />
                                        </div>
                                    </Grid>
                                </>)
                                }
                                <Grid item xs={12} md={5}>
                                    <div className='inicio'>
                                        <Paper elevation={15} style={paperStyle}>
                                            <Grid align='center'>
                                                <Avatar style={avatarStyle}>

                                                </Avatar>
                                            </Grid>
                                            <div style={{ marginTop: '20px' }}>
                                                <TextField className='input'
                                                    label='Usuario' placeholder='Ingresa el usuario'
                                                    type='email' variant="outlined" fullWidth required
                                                    onChange={(e) => {
                                                        setEmailRef(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <div style={{ marginTop: '20px' }}>
                                                <TextField className='input' label='Contraseña' placeholder='Ingrese contraseña'
                                                    type='password' variant="outlined" fullWidth required
                                                    onChange={(e) => {
                                                        setPasswordRef(e.target.value);
                                                    }}
                                                />
                                            </div>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        name="checkedB"
                                                        color="primary"
                                                    />
                                                }
                                                label="Recuerdame"
                                            />
                                            <Button type='submit' color='primary' variant="contained"
                                                style={btnstyle} fullWidth
                                                onClick={iniciarSesion}
                                                disabled={isDisabled}
                                            >Iniciar sesion</Button>
                                            <Divider ><span className='spanText'>Inicia con</span></Divider>
                                            <center>

                                                <div className='googleAuth' onClick={loginGoole}>
                                                    <span>
                                                        <img src={IconGoole} alt="Icono de Goole" height={'30'} className='icono' />
                                                    </span>
                                                    <Button >Inicia con Google</Button>
                                                </div>
                                            </center>


                                            <Typography onClick={() => navigateTo('/resetCount')}>
                                                <Link className='text-important' >
                                                    Olvidaste tu contraseña ?
                                                </Link>
                                            </Typography>
                                            <Typography > No tienes cuenta aun?
                                                <Button variant="text" onClick={() => navigateTo('/register')} >
                                                    Registrate
                                                </Button>
                                            </Typography>
                                        </Paper>
                                    </div>

                                </Grid>
                            </Grid>
                            <center><h5>Puedes acceder a tu historial de pruebas realizadas</h5></center>
                        </Box>
                    </div>
                )
            }

        </>


    )
}
