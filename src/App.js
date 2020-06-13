import React from 'react';
import { Header } from './component/Header';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      
    </GlobalProvider>
  );
}

export default App;