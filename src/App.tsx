import React from 'react';
import './App.css'
import SiteHeader from './homepage/SiteHeader';
import MainRoute from './homepage/MainRoute';


const App: React.FC = () => {
  return (
    <div>
      <SiteHeader />
      <MainRoute />
    </div>
  )
};

export default App;
