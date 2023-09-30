// CodeTextarea.js
import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { configContext } from '../context/configContext';
import WITHOUT from '../services/WITHOUT.png'
import { Options } from './options';

export default function CodeTextarea({ code, language }) {
  const { lenguage, tool, response } = useContext(configContext)
  return (
    <>
      <div className='codeMirrow'>
        {response ? (
          <>
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
              {response}
            </SyntaxHighlighter>
          </>


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
          <Options />
        </div>
      ) : (
        <span></span>
      )
      }
    </>
  );
}
