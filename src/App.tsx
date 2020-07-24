import React from 'react';
import './App.css'
import { Header } from "./homepage/Header";
import { CharacterGrid } from './homepage/CharacterGrid';


const App: React.FC = () => {
  return (
      <div className="App">
        <Header />
        <CharacterGrid />
      </div>      
  );
};

export default App;
