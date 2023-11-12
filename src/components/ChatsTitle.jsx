import React, {useState, useE} from 'react'
import '../styles/Chat.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCollections } from '../services/firebaseController';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';

export const ChatsTitle = ({ title, id, onClick }) => {
  const Borrar = () => {
    Swal.fire({
      title: "¿Estas segúro de eliminar este historial?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        const eliminado = deleteCollections("registros",id);
        if (eliminado) {
          Swal.fire({
            title: "Eliminado correctamente",
            text: "El historial ha sido eliminado con éxito",
            icon: "success"
          });
          setDeleted(true); 
        } else {
          Swal.fire({
            title: "Error al eliminar",
            text: "No se pudo eliminar el historial. Intentalo luego",
            icon: "error"
          });
        }
      }
    });
  }
  return (
    <div className="chat-title" onClick={onClick}>
      <span className="title-icon">
        <span className='delete-icon' onClick={Borrar}>
          <Tooltip title="Eliminar este historial" placement="top">
            <DeleteIcon style={{ marginRight: '2px', marginLeft: '-6px' }} />
          </Tooltip> </span>
        {title}
      </span>
    </div>
  )
}
