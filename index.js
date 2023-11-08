'use client'
import React, { useState, useEffect } from 'react';

function Home() {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    const namesFromStorage = localStorage.getItem('user_names');
    if (namesFromStorage) {
      setNames(JSON.parse(namesFromStorage));
    }
  }, []);

  function handleInputChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNames([...names, name]);
    localStorage.setItem('user_names', JSON.stringify(names));
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Home;
