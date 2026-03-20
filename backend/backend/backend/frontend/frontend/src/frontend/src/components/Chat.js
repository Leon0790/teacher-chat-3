import React, { useState, useEffect } from 'react';

function Chat({ socket, user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    socket.on('receive_message', (msg) => setMessages(prev => [...prev, msg]));
  }, [socket]);

  const sendMessage = () => {
    if (!text) return;
    socket.emit('send_message', { from: user.email, to: 'all', text });
    setText('');
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black' }}>
        {messages.map((msg, i) => (
          <div key={i}><b>{msg.from}:</b> {msg.text}</div>
        ))}
      </div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
