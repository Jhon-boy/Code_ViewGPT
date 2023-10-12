import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { configContext } from '../context/configContext';
import Autocomplete from '@mui/material/Autocomplete';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { getLenguajes } from '../API/API_LENGUAJE';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { generarCodigo } from '../services/ApiController'
import { tooles } from '../pure/Items';
import Tooltip from '@mui/material/Tooltip';


export const Context = () => {
    const [Cargarlanguages, setCargarLanguages] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const { setLenguaje, lenguage, setDescripcion, descripcion, setTool, tool, codigo, setResponse, setLoading, setCodigo } = React.useContext(configContext)
    const isDisabled = lenguage == '' || tool == '';
    const isDisabledConfig = lenguage == '' || tool == '' || codigo == '';

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setDescripcion('');
        setTool('');
        setLenguaje('');
        setOpen(false);
    };
    const next = () => {
        setOpen(false);
    }
    const GenerateCode = async () => {
        setLoading(true); // change the loading state , and shows the loeader at main page
        try {
            const response = await generarCodigo(lenguage, descripcion, tool, codigo); // get the response
            
            setResponse(response.message); // Save the answer 
        } finally {
            setLoading(false);  // Change to false 
        }
    }
    const clearBox = () => {
        setCodigo(null);
        setDescripcion('');
        setTool('');
        setLenguaje('');
    }
    React.useEffect(() => {
        getLenguajes()
            .then(data => {
                setCargarLanguages(data);
            })
            .catch(error => {
                console.error('Error al obtener los lenguajes:', error);
            });
    }, []);

    return (
        <div>
            <div className='btnStack'>
                <Stack spacing={10} direction="row">
                    {codigo ? (
                        <Tooltip title="Limpiar campos">
                            <div className='clear-btn' onClick={clearBox}>
                                <img src='https://cdn-icons-png.flaticon.com/512/4021/4021663.png'
                                    alt='icono de barrido'
                                    height={37}
                                    width={42}
                                />
                            </div>
                        </Tooltip>
                    ) : null}

                    <Button size="large" variant="outlined" onClick={handleClickOpen}>Configurar</Button>
                    <Button size="large" variant="outlined"
                        onClick={GenerateCode}
                        disabled={isDisabledConfig}
                    >Generar Pruebas</Button>
                </Stack>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <h4 className='titulo'>Seleccione el lenguaje:</h4>
                    <Autocomplete
                        options={Cargarlanguages}
                        getOptionLabel={(option) => option.name}
                        onChange={(event, selectedValue) => setLenguaje(selectedValue.name)}
                        renderInput={(params) => <TextField {...params} label="Lenguaje" />}
                    />
                    <h4 className='titulo'>Seleccione la herramienta:</h4>
                    <Autocomplete
                        options={tooles}
                        getOptionLabel={(option) => option.tools}
                        onChange={(event, selectedValue) => setTool(selectedValue.tools)}
                        renderInput={(params) => <TextField {...params} label="Lenguaje" />}
                    />
                    <DialogContentText>
                        <h4 className='titulo'>Da una breve descripción (opcional):</h4>
                    </DialogContentText>
                    <TextareaAutosize
                        aria-label="code"
                        minRows={3}
                        placeholder="Esta funciona ayuda ...."
                        onChange={(e) => setDescripcion(e.target.value)}
                        style={{
                            width: '85%',
                            minHeight: '30px',
                            minWidth: '320px',
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '10px',
                            background: 'white',
                            color: 'black',
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained"
                        endIcon={<SendIcon />} onClick={next}
                        disabled={isDisabled}
                    >Continuar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
