import React, { useState } from 'react';
import axios from 'axios';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:5000/login', { email, password });
    if (res.data.status === 'ok') setUser(res.data.user);
    else alert('Invalid credentials');
  };

  return (
    <div>
      <h3>Login</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
