import React from 'react';
import './App.css'
import SiteHeader from './components/common/SiteHeader';
import MainRoute from './components/common/MainRoute';


const App: React.FC = () => {
  return (
    <div className="container">
      <SiteHeader />
      <MainRoute />
    </div>
  )
};

export default App;
