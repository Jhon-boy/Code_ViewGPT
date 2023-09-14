// CodeTextarea.js
import React, { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus  } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { configContext } from '../context/configContext';

export default function CodeTextarea({ code, language }) {
  const{lenguage, descripcion} =  useContext(configContext)
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
  <h6>lenguaje: {lenguage} + {descripcion}</h6>
       <SyntaxHighlighter language={language} style={vscDarkPlus }>
        {codex} 
      </SyntaxHighlighter>
    </div>
    </>
      
  );
}
