import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Auth from './routes';

function App() {
    return <div className="App">
      <Header />
      <Auth />
    </div>;
}

export default App;
