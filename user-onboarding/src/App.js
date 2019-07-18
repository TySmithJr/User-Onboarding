import React, { useState } from 'react';
import UserForm from "./Components/UserForm"
import './App.css';

function App() {

  const [userInfo, setUserInfo] = useState()

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App; 
