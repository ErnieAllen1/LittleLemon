import React from 'react';
import './App.css';
import Nav from "./Nav"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;