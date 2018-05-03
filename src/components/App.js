import React, { Component } from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Menu from './Menu'
import Merch from './Merch'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>Welcome to the cat cafe</h1>
        <div>modal with email sign up option</div>
        <About/>
        <Menu />
        <Merch />
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
