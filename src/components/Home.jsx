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
import { RotatingLines } from 'react-loader-spinner'

export const Home = () => {
  const [code] = React.useState('');
  const { setCodigo, codigo, loading, response } = React.useContext(configContext)

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
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999, // Asegura que esté en la parte superior
          }}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}

      <div className='Suport'>
        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <CodeMirror
                value={code}
                placeholder='Here your code'
                height='77vh'
                theme={vscodeDark}
                extensions={[loadLanguage('jsx')]}
                onChange={handleCodeChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <CodeTextarea code={code} language="javascript">
              </CodeTextarea>
            </Grid>
          </Grid>
        </Box>
        <div>
          <Context />
        </div>
      </div>
    </>
  )
}
