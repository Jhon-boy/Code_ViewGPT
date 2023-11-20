import React, { useEffect, useState, useContext } from 'react';
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
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Home = () => {
  const [code] = useState('');
  const { setCodigo, codigo, loading, response } = useContext(configContext)
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);


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

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };
  useEffect(() => {
    const isFirstLogin = localStorage.getItem('firstLogin') === null;

    if (isFirstLogin) {
      setShowWelcomeModal(true);
      localStorage.setItem('firstLogin', 'false');
    }
  }, []);

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
      <Modal
        open={showWelcomeModal}
        onClose={handleCloseWelcomeModal}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          border: '2px solid #6495ED',
          boxShadow: '0px 0px 10px #aaa',
        }}
      >
      
        <Paper
          style={{
            background: '#f2f2f2',
            padding: '20px',
            borderRadius: 10,
            width: 300
          }}
        >

          <Typography
            variant="h6"
            style={{ marginBottom: 20 }}
          >
            ¡Bienvenido a Code View!
          </Typography>

          <Typography>
            Crea pruebas unitarias de forma rápida. ¡Comencemos!
          </Typography>

          <Button
            onClick={handleCloseWelcomeModal}
            style={{
              marginTop: 20,
              background: '#6495ED',
              color: 'white'
            }}
          >
            Comenzar
          </Button>

        </Paper>

      </Modal>
    </>
  )
}
