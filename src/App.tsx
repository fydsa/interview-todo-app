import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/home.component'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
