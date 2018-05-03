import React from 'react'

const About = () => {
  return (
    <div id="about">
      <h1>Welcome to the cat cafe</h1>
      <p>We are New York's finest cat cafe. Come enjoy a drink or snack with the cutest adoptable cats on the East Coast.</p>
      <div id="carousel">
        <div><img src={require(`../img/cat1.jpg`)}/></div>
        <div><img src={require(`../img/cat2.jpg`)}/></div>
        <div><img src={require(`../img/cat3.jpg`)}/></div>
        <div><img src={require(`../img/cat4.jpg`)}/></div>
        <div><img src={require(`../img/cat5.jpeg`)}/></div>
        <div><img src={require(`../img/cat7.jpg`)}/></div>
        <div><img src={require(`../img/cat8.jpg`)}/></div>
      </div>
    </div>
  )
}

export default About
