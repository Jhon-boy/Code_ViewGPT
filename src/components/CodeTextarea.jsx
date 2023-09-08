// CodeTextarea.js
import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus  } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StyledCodeTextarea = styled(TextareaAutosize)`
  width: 100%;
  min-height: 100px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
`;
const code = `  return (
  <React.StrictMode>
     <PokemonProvider>
    <AppRouter />
  </PokemonProvider>
  </React.StrictMode>
 
);`

export default function CodeTextarea({ code, language }) {
  const codex = `  return (
    <React.StrictMode>
       <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
    </React.StrictMode>
   
  );`
  return (
    <>
      <SyntaxHighlighter language={language} style={vscDarkPlus }>
        {codex} 
      </SyntaxHighlighter>
    </>
      
  );
}
