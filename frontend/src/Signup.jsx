import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // Typically, you would make an API call to create a new user account
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='button' onClick={handleSignup}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
