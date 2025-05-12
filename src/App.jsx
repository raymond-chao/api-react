import { useState } from "react";
import Login from "./components/Login.jsx";
import LoginRegister from "./components/Registration.jsx";
import API from "./components/api.jsx";
import React from 'react';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="App">
      {showRegister ? (
        <LoginRegister />
      ) : (
        <Login toggleForm={toggleForm} />
      )}

      <API />
    </div>
  );
}

export default App;
