import React, { useState } from 'react';
import axios from 'axios';

function Signup({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('teacher');

  const handleSignup = async () => {
    const res = await axios.post('http://localhost:5000/signup', { email, password, role });
    if (res.data.status === 'ok') setUser({ email, role });
  };

  return (
    <div>
      <h3>Signup</h3>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
      <select value={role} onChange={e => setRole(e.target.value)}>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
