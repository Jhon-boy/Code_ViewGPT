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
import { Context } from '../configs/Configuracion';
import { configContext } from '../context/configContext';

export const Home = () => {
  const [code] = React.useState('');
  const {setCodigo, codigo} = React.useContext(configContext)

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const handleCodeChange = (value) => {
    setCodigo(value);
  };

  return (
    <div className='Suport'>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
          <CodeMirror
              value={code}
              placeholder='Here your code'
              height='75vh'
              theme={vscodeDark}
              extensions={[loadLanguage('jsx')]}
              onChange={handleCodeChange}
            />
          </Grid>
          <Grid item xs={12} md={5}>
             <CodeTextarea code={codigo} language="javascript"></CodeTextarea>
          </Grid>
        </Grid>
      </Box>
      <div>
        <Context />
      </div>
    </div>
  )
}
