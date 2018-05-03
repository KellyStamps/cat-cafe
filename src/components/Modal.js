import React from 'react'

class Modal extends React.Component {

  state = {
    showing: true
  }

  handleClose = () => {
    this.setState({showing: false})
  }

  render(){
    if (this.state.showing) {
      return(
        <div id="modal-wrapper">
          <div id="modal">
            <div onClick={this.handleClose} id="close">close</div>
            <p>Sign up for our mailing list!</p>
            <form>
              <input className="input" type="text" placeholder="Email Address"/>
              <input className="input" type="text" placeholder="Birthday"/>
              <input type="submit" id="submit" value="Submit"/>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }

  }
}

export default Modal
