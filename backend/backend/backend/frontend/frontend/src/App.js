import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './components/Chat';
import Login from './components/Login';
import Signup from './components/Signup';

const socket = io('http://localhost:5000'); // Change to Railway domain on deployment

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <>
          <Login setUser={setUser} />
          <Signup setUser={setUser} />
        </>
      ) : (
        <Chat socket={socket} user={user} />
      )}
    </div>
  );
}

export default App;
