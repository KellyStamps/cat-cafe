import React from 'react'

class Contact extends React.Component {
  render(){
    return(
      <div>
        <div>Address, phone number</div>
        <div>Google maps</div>
        <p>We'd love to hear from you!</p>
        <form>
          <input type="text" placeholder="email"/>
          <input type="text" placeholder="name"/>
          <input type="textarea" placeholder="Question or comment"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Contact
