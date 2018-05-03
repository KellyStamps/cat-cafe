import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import Modal from './Modal'
import About from './About'
import Menu from './Menu'
import Merch from './Merch'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal/>
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
