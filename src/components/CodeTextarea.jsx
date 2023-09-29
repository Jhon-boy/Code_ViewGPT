// CodeTextarea.js
import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { configContext } from '../context/configContext';
import WITHOUT from '../services/WITHOUT.png'
export default function CodeTextarea({ code, language }) {
  const { lenguage, tool, response } = useContext(configContext)
  const codex = `  return (
    <React.StrictMode>
       <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
    </React.StrictMode>
   
  )
`
  return (
    <>
      <div className='codeMirrow'>
        {response ? (
          <SyntaxHighlighter language={language} style={vscDarkPlus}>
            {response}
          </SyntaxHighlighter>
        ) : (
          <div>
            <h3>Aun no haz hecho ninguna prueba :(</h3>
            <img src={WITHOUT} alt="Respuesta vacía"
              width="500"
              height="400"></img>
          </div>
        )
        }
      </div>
      {response ? (
        <div style={{ display: 'flex' }}>
          <h6 className='aviso'>Lenguaje: {lenguage}</h6>
          <h6 className='aviso'>Herramienta: {tool}</h6>
        </div>
      ) : (
        <span></span>
      )
      }
    </>
  );
}
