import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Context = () => {
    return (
        <div>
            <div>
                <Stack spacing={10} direction="row">
                    <Button size="large" variant="contained">Configurar</Button>
                    <Button size="large" variant="outlined">Generar Pruebas</Button>
                </Stack>
            </div>
        </div>
    )
}
