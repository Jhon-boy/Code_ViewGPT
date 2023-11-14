import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { images, steps } from '../pure/steps.js';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Help = () => {
  const theme = useTheme();
  const [activeStep2, setActiveStep2] = React.useState(0);
  const maxSteps2 = images.length;


  const handleNext2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 + 1);
  };

  const handleBack2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep2(step);
  };

  return (
    <div className="home-information">
      <div className="tutorial">
        <h3 >Bienvenido a nuestro sitio web, estamos encantados de que estés aquí. Queremos ayudarte a aprovechar
          al máximo todas las funciones y recursos que tenemos para ofrecerte. Esta guía te mostrará cómo navegar
          y utilizar las diferentes secciones de nuestro sitio de manera sencilla</h3>
          <div className='pruebas'>
             <Box sx={{ flexGrow: 2 }}>
        <h4 className='titleP'>Guía para generar pruebas</h4>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <h3>¿Como generar pruebas?</h3>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Paso 1: Ingresa tu función</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Como primer paso debes insertar el código en el componente principal, debes asegurarte que
                    sea una función propia para su posterior generación de pruebas unitarias
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Paso 2: Configura tu función</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Como segundo paso, debes configurar todos los parámetros indicados en el componente. Para acceder a esta función debes dar click en el
                    botón Configurar. Aquí debes seleccionar el lenguaje de programación así como su herramienta de testing. Por último,
                    debes ingresar un contexto de lo que realiza tu función.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Paso 3: Esperar respuesta</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Una vez completado todos los pasos anteriores, da click en el botón Generar y espera aproximadamente 1 minuto como promedio
                    (Puede variar el tiempo de espera según la complejidad de función ingresada). Cuando las pruebas se hayan generado con éxito, se visualizarán
                    en otro componente.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} md={3}>
              <h3>Tutorial</h3>
              <Box sx={{ minWidth: 400, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={activeStep2}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {images.map((step, index) => (
                    <div key={step.label}>
                      {Math.abs(activeStep2 - index) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 335,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                          }}
                          src={step.imgPath}
                          alt={step.label}
                        />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                  steps={maxSteps2}
                  position="static"
                  activeStep={activeStep2}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext2}
                      disabled={activeStep2 === maxSteps2 - 1}
                    >
                      Siguiente
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button size="small" onClick={handleBack2} disabled={activeStep2 === 0}>
                      {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Volver
                    </Button>
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
          </div>
       
      </div>
    </div>
  )
}
