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

export const Context = () => {
    const [Cargarlanguages, setCargarLanguages] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const { setLenguaje,lenguage, setDescripcion,descripcion,  setTool , tool, codigo} = React.useContext(configContext)
    const [loading, setLoading] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log('SELECIONADO' + lenguage);
        setOpen(false);
    };

    const GenerateCode = async () => {
        const response = await generarCodigo(lenguage, descripcion, tool, codigo);
        console.log(response)
    }

    const renderOption = (option) => {
        if (option && option.tools) {
            return (
                <div>
                    <strong>{option.language}</strong>
                    <p>Tools: {option.tools.join(', ')}</p>
                </div>
            );
        }
        return null;
    };
    
    React.useEffect(() => {
        setLoading(true);
        getLenguajes()
            .then(data => {
                setCargarLanguages(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los lenguajes:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className='btnStack'>
                <Stack spacing={10} direction="row">
                    <Button size="large" variant="contained" onClick={handleClickOpen}>Configurar</Button>
                    <Button size="large" variant="outlined" onClick={GenerateCode}>Generar Pruebas</Button>
                </Stack>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <center> <DialogTitle>Configuremos tu código!!</DialogTitle></center>
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
                            width: '95%',
                            minHeight: '40px',
                            minWidth: '350px',
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
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleClose}>Cancenlar</Button>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleClose}>Continuar</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
