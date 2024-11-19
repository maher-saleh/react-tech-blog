import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import { useEffect, useState } from 'react';
import { GlobalProvider } from './GlobalContext';

function App() {

  const title = 'Tech Blog';

  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className="content">
            {/* <h1>{ title }</h1> */}
            <Routes>
              <Route exact path='/' Component={Home}/>
              <Route exact path='/create' Component={Create}/>
              <Route exact path='/blogs/:id' Component={BlogDetails}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
