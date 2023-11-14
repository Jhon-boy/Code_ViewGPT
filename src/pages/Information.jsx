import React from 'react'
import banner from '../services/banner.jpg'
import Box from '@mui/material/Box';
import NODE from '../services/NODE.png'
import OPENAI from '../services/OPENAI.png'
import REACT from '../services/REACT.png'
import MATERIAL from '../services/MATERIAL.png'
import Grid from '@mui/material/Grid';

export const Information = () => {
    return (
        <>
            <div className='home-information'>
                <div className='portada'>
                    <img src={banner} alt="Banner" className='img-portada' />
                </div>
                <div className='contexto'>
                    <div className='informacion'>
                        <h2>Code View</h2>
                        <div className=''>
                            <div className='textP'>
                                <h4>Descripción General</h4>
                                <p>
                                    Nuestro sitio web permite a los usuarios generar pruebas unitarias de manera eficiente a partir del
                                    código fuente que ingresen. Esto es esencial en el desarrollo de software, ya que ayuda a garantizar
                                    la calidad y la funcionalidad de las aplicaciones. Los usuarios pueden ingresar su código y obtener
                                    pruebas unitarias automáticas que ayudan a identificar y solucionar errores.
                                </p>
                                <h4>Recursos usados</h4>
                                <p>
                                    Además de las funciones principales, proporcionamos información adicional y recursos relacionados con las pruebas unitarias y las mejores prácticas en el desarrollo de software, impulsados por la capacidad de procesamiento de lenguaje natural de OpenAI.
                                </p>
                            </div>
                            <div className='Materials'>
                                <ul>
                                    <li><a className='netlify' href='https://www.netlify.com'>Netlify</a></li>
                                </ul>
                                <ul>
                                    <li><a className='pokemm' href='https://firebase.google.com'>Open AI API</a></li>
                                </ul>
                                <ul>
                                    <li><a className='firebase' href='https://firebase.google.com'>Firebase</a></li>
                                </ul>
                                <ul>
                                    <li><a className='reactjs' href='https://react.dev'>React</a></li>
                                </ul>
                                <ul>
                                    <li><a className='reactjs' href='https://mui.com/material-ui/'>Material UI</a></li>
                                </ul>
                                <ul>
                                    <li><a className='reactjs' href='https://mui.com/material-ui/'>Node JS</a></li>
                                </ul>
                            </div>
                        </div>
                        <Box sx={{ flexGrow: 1 }} className='logosP'>
                            <Grid container spacing={5}>
                                <Grid item xs={5} md={3}>
                                    <img src={REACT} className="App-logo " id='pokeImg' alt="logo" />
                                </Grid>
                                <Grid item xs={5} md={3}>
                                    <img src={NODE} className="App-logo " id='pokeImg' alt="logo" />
                                </Grid>
                                <Grid item xs={5} md={3}>
                                    <img src={OPENAI} className="App-logo " id='pokeImg' alt="logo" />
                                </Grid>
                                <Grid item xs={5} md={3}>
                                    <img src={MATERIAL} className="App-logo " id='pokeImg' alt="logo" />
                                </Grid>
                            </Grid>
                        </Box>
                        <div className='textP'>
                            <h4>Funcionalidad de Cuenta de Usuario</h4>
                            <p>
                                Para aprovechar al máximo nuestra plataforma, los usuarios pueden crear una cuenta personal.
                                Con una cuenta, pueden acceder a su historial de pruebas unitarias guardadas en cualquier momento
                                y desde cualquier dispositivo. Además, la cuenta proporciona una experiencia personalizada y opciones de configuración.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
