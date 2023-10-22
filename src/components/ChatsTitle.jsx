import React from 'react'
import '../styles/Chat.css'

export const ChatsTitle = ({ title, onClick }) => {

  return (
    <div className="chat-title" onClick={onClick}>
      {title}
    </div>
  )
}
