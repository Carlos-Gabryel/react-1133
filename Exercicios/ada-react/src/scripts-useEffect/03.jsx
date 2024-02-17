import React, { useState, useEffect } from 'react';

export const AutoSaveForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }, [name, email]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleManualSave = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </form>
      <button onClick={handleManualSave}>Salvar Manualmente</button>
    </div>
  );
};
