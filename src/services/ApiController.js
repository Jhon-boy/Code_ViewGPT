import {URL_API} from '../API/OPEN_AI';

export const generarCodigo = async (lenguage) => {
    try {
        const response = await fetch(`${URL_API}/response`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lenguage)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }

        const data = await response.json();
        return data; // Devuelve la respuesta en formato JSON
    } catch (error) {
        console.error('Error al generar código:', error);
        throw error; // Puedes propagar el error para manejarlo en otro lugar si es necesario
    }
};