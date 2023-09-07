// CodeTextarea.js
import React from 'react';
import { styled } from '@mui/system';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StyledCodeTextarea = styled(TextareaAutosize)`
  width: 100%;
  min-height: 100px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  background: black; /* Cambiar el fondo a negro */
  color: white; /* Cambiar el color del texto a blanco */
`;

export default function CodeTextarea({ code, language }) {
  return (
    <StyledCodeTextarea
      aria-label="code"
      minRows={3}
      placeholder="Insert code here"
    >
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </StyledCodeTextarea>
  );
}
