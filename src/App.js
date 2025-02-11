import React from 'react';
import './App.css';
import VideoConverter from '../src/components/VideoConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-green-500">
        <h1 className="text-2xl text-center p-[10px] font-bold underline decoration-red-500">Convertisseur YouTube en MP3</h1>
        <VideoConverter />
      </header>
    </div>
  );
}

export default App;
