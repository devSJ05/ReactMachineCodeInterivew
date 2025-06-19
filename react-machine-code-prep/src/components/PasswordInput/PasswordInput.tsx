/*
The requirement is to create a password input component in React that allows users to enter their passwords securely.
Have a button beside the input field to toggle the visibility of the password.

*/
import { useState } from 'react';
import '../PasswordInput/PasswordInput.css';
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='container'>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter your password'
        className='input'
      />
      <button
        type='button'
        onClick={() => setShowPassword(!showPassword)}
        className='button'
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordInput;
