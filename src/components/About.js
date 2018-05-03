import React from 'react'

const About = () => {
  return (
    <div id="about">
      <p>This is paragraph 1, about who we are.</p>
      <div id="carousel">
        <div><img src={require(`../img/cat1.jpg`)}/></div>
        <div><img src={require(`../img/cat2.jpg`)}/></div>
        <div><img src={require(`../img/cat3.jpg`)}/></div>
        <div><img src={require(`../img/cat4.jpg`)}/></div>
      </div>
      <p>This is paragraph 2, about our mission.</p>
    </div>
  )
}

export default About
