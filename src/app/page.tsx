"use client"
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Logo from "@/components/Logo/Logo";
import './page.css';
import CardImage from "@/components/CardImage/CardImage";

type ApiResponse = {
  message: string;

};



export default function Home() {

  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    
    const socket = new WebSocket('wss://websockethexagonal.onrender.com'); 

    
    socket.addEventListener('message', (event) => {
      setMessage(event.data);
      console.log(event.data);
    });

 
    socket.addEventListener('open', (event) => {
      console.log('Connected to WS server');
    });


    socket.addEventListener('error', (event) => {
      console.error('WebSocket error:', event);
    });

  
    return () => {
      socket.close();
    };
  }, []);

  const sendMessageToAPI = async (): Promise<void> => {
    try {
      const response = await fetch('https://apihexagonal1.onrender.com/api/zoo', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": "Animal Name",
          "weight": 100.5,
          "age": 5,
          "type": "Mammal"
        }
        ), 
      });
 console.log(response)
      if (response.ok) {
        const data: ApiResponse = await response.json();
        console.log('Mensaje enviado a la API y esperando respuesta...', data);
      } else {
        console.error('Error al enviar mensaje:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar mensaje a la API:', error);
    }
  };

  return (
    <main className="Home flex-col-center">
      <section className="welcome flex-col-center">
        <Logo width="15em" />
        <article className="flex-col-center">
         
          <button onClick={sendMessageToAPI}>Enviar Mensaje a API</button>
         
          {message && <p>Mensaje recibido: {message}</p>}
        </article>
        <CardImage srcImage="" />
      </section>
    </main>
  );
}
