import React from 'react';
import './App.css'
import SiteHeader from './components/common/SiteHeader';
import MainRoute from './components/common/MainRoute';


const App: React.FC = () => {
  return (
    <div>
      <SiteHeader />
      <div className="container">
        <MainRoute />
      </div>
    </div>
  )
};

export default App;
