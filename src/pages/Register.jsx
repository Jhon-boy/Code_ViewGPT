import React, { useContext, useState } from 'react'
import { Grid, Paper, Avatar, Button, Typography, Link, Box, useMediaQuery, useTheme } from '@mui/material/'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import '../index.css'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../services/firebase'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { configContext } from '../context/configContext';

// Aqui traemos la funcion que permite obtener el registro de sesiion 
const auth = getAuth(app)

export const Register = () => {

  const { usuario, setUsuario } = useContext(configContext);
  const history = useNavigate();
  const navigateTo = (path) => {
    history(path);
  }

  const paperStyle = { padding: 20, margin: "30px auto", height: "auto", width: "320px" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //Valores iniciales 
  const initialValues = {
    email: '',
    password: '',
  }

  // verificacion de cumplimiento de paramtros!!
  const registerSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email('Formato invalido')
        .required('Campo Obligatorio'),
      password: Yup.string()
        .min(7, 'Se necesita al menos 7 caracteres')
        .matches(/[0-9]/, 'Se necesita al menos un Numero')
        .matches(/[a-z]/, 'Se necesita al menos una letra [a-z]')
        .matches(/[A-Z]/, 'Se necesita al menos una letra [A-Z]')
        .required("Campo Obligatorio"),
      confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'La contraseña debe coincidir'),
    }
  )

  const CreateUser = async (e) => {
    e.preventDefault();
    const emailRef = e.target.email.value;
    const passwordRef = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (emailRef.trim() == '' || passwordRef.trim() == '' || confirm.trim() == '' || passwordRef != confirm) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique que los campos esten correctamente completados',
      })
    } else {
      try {
        await createUserWithEmailAndPassword(auth, emailRef, passwordRef).catch(e => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido crear su Cuenta!!',
            footer: 'Intente de nuevo'
          })
        });
        setUsuario(emailRef);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cuenta creada correctamente',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true
        })
        history('/');
        localStorage.setItem('credenciales', auth);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salio mal!!. Vuelva a intentarlo',
        })
      }
    }

  }

  return (
    <div className='login'>
    <Button onClick={() => navigateTo('/login')} style={{marginLeft:'40px', marginTop: '10px'}}>Volver</Button>
      <Box sx={{ flexGrow: 2 }} height="100vh">
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
                  <Avatar style={avatarStyle}><PersonAddAlt1Icon /></Avatar>
                  <h2>Registrate. Es gratis!!</h2>
                </Grid>
                <Formik
                  initialValues={initialValues}
                  validationSchema={registerSchema}
                >
                  {({ errors, touched, values }) => (
                    <Form onSubmit={CreateUser}>
                      <Field
                        type='email'
                        placeholder='Correo electrónico'
                        className="form-control"
                        id='email'
                        name='email'

                      />
                      {
                        errors.email && touched.email &&
                        (
                          <ErrorMessage name='email' className='Errores' component='div'></ErrorMessage>
                        )
                      }

                      <div style={{ marginTop: '20px' }}>
                        <Field
                          type='password'
                          placeholder='Contraseña'
                          className="form-control"
                          id='password'
                          name='password'

                        />
                        {
                          errors.password && touched.password &&
                          (
                            <ErrorMessage name='password' className='Errores' component='div'></ErrorMessage>
                          )
                        }
                      </div>

                      <div style={{ marginTop: '20px' }}>
                        <Field
                          type='password'
                          placeholder='Confirme Contraseña'
                          className="form-control"
                          id='confirm'
                          name='confirm'

                        />
                        {
                          errors.confirm && touched.confirm &&
                          (
                            <ErrorMessage name='confirm' className='Errores' component='div'></ErrorMessage>
                          )
                        }
                      </div>

                      <FormControlLabel
                        control={<Checkbox name="acceptTerms" color="primary" />}
                        label="Acepto términos y condiciones"
                      />
                      {errors.acceptTerms && (
                        <div className='Errores'>{errors.acceptTerms}</div>
                      )}

                      <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                        Registrarme
                      </Button>

                      <Typography>
                      </Typography>

                    </Form>
                  )}
                </Formik>
              </Paper>
            </div>

          </Grid>
        </Grid>
        <center><h5>Puedes acceder a tu historial de pruebas realizadas</h5></center>
      </Box>
    </div>

  )
}
