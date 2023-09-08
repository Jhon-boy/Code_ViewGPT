import React from 'react';
import '../styles/Home.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CodeMirror from '@uiw/react-codemirror';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import CodeTextarea from './CodeTextarea';
import { Context } from '../configs/Condiguracion';


export const Home = () => {
  const [code, setCode] = React.useState('');

  // Función para manejar cambios en el código
  const handleCodeChange = (editor, data, newCode) => {
    setCode(newCode);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='Suport'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <CodeMirror
              value={code}
              placeholder="Here your code"
              height="75vh"
              theme={vscodeDark}
              extensions={[loadLanguage('jsx')]}
            />
          </Grid>
          <Grid item xs={4}>
            <CodeTextarea code={code} language="javascript"></CodeTextarea>
          </Grid>
        </Grid>
      </Box>
      <div>
        <Context />
      </div>
    </div>
  )
}
