import React, { useState, useEffect } from 'react'
import { ChatsTitle } from './ChatsTitle';
import '../styles/Chat.css'
import { obtenerRegistros } from '../services/firebaseController';
import { configContext } from '../context/configContext';
import { ChatResponse } from './ChatResponse';
import { Waveform } from '@uiball/loaders'

export const ChatApp = () => {
  const [chats, setChats] = useState([]); // Títulos de los chats
  const [currentChat, setCurrentChat] = useState(null);
  const { usuario } = React.useContext(configContext);
  const [contadorIntentos, setContadorIntentos] = useState(0);
  const [loeader, setLoeader] = useState(true);

  const loadChat = (chat) => {
    setCurrentChat(chat);
  };

  const obtenerChats = async () => {
    try {
      const registros = await obtenerRegistros(JSON.stringify(usuario.uid));
      const nuevosChats = registros.map((registro) => ({ ...registro.data, id: registro.id }));
      setChats(nuevosChats);
    } catch (error) {
      setLoeader(false);
    } finally {
      setLoeader(false);
    }
  };

  useEffect(() => {
    obtenerChats();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-titles">
        <h4>Mi Historial</h4>
        {loeader ? ( // Muestra el loader mientras se carga
          <div className='loader'>
            <Waveform size={50} color='white' />
          </div>

        ) : chats.length > 0 ? (
          chats.map((chat) => (
            <ChatsTitle key={chat.id} title={chat.titulo} id={chat.id} onClick={() => loadChat({ ...chat, id: chat.id })} />
          ))
        ) : (
          <p>No hay historial.</p>
        )}
      </div>
      <div className="chat-content">
        {currentChat ? (
          <ChatResponse chat={currentChat} />
        ) : (
          'Selecciona un historial.'
        )}
      </div>
    </div>
  )
}
