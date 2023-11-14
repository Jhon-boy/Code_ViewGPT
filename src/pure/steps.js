// images.js
import PASO1 from '../img/PASO1.png';
import PASO2 from '../img/PASO2.png';
import PASO3 from '../img/PASO3.png';
import PASO4 from '../img/PASO4.png';
import PASO5 from '../img/PASO5.png';

function createImageArray(images, labels) {
  if (images.length !== labels.length) {
    throw new Error('El número de imágenes y etiquetas debe ser el mismo');
  }

  const imageArray = [];
  for (let i = 0; i < images.length; i++) {
    imageArray.push({
      label: labels[i],
      imgPath: images[i],
    });
  }

  return imageArray;
}

const imageLabels = ['Paso 1: Ingresa tu función', 'Paso 2: Selecciona tu lenguaje', 'Paso 3: Selecciona la herramienta', 'Paso 4: Ingresa un contexto', 'Paso 5: Genera y espera'];
const imagePaths = [PASO1, PASO2, PASO3, PASO4, PASO5];

const images = createImageArray(imagePaths, imageLabels);

const steps = [
  {
    label: 'Ingresa tu función',
    description: `Como primer paso debes insertar el código en el componente principal, debes asegurarte que 
    sea una función propia para su posterior generación de pruebas unitarias.`,
  },
  {
    label: 'Configura tu función',
    description: `Como segundo paso, debes configurar todos los parámetros indicados en el componente. Para acceder a esta función debes dar click en el
      botón Configurar. Aquí debes seleccionar el lenguaje de programación así como su herramienta de testing. Por último, 
      debes ingresar un contexto de lo que realiza tu función.`,
  },
  {
    label: 'Esperar la Respuesta',
    description: `Una vez completado todos los pasos anteriores, da click en el botón Generar y espera aproximadamente 1 minuto como promedio 
    (Puede variar el tiempo de espera según la complejidad de función ingresada). Cuando las pruebas se hayan generado con éxito, se visualizarán
    en otro componente.`,
  },
];

export { images, steps };
