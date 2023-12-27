import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <Router>
      <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-200 min-h-screen'>
          <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
          <Routes />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App

