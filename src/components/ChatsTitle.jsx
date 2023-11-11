import React from 'react'
import '../styles/Chat.css'
import DeleteIcon from '@mui/icons-material/Delete'; 
export const ChatsTitle = ({ title, onClick }) => {

  return (
    <div className="chat-title" onClick={onClick}>
    <span className="title-icon">
       <span className='delete-icon'> <DeleteIcon style={{ marginRight: '2px', marginLeft: '-6px' }} /></span> 
        {title}
      </span>
    </div>
  ) 
}
