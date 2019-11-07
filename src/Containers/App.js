import React, { Component } from 'react';
import Navigation from '../Components/Navbar/Navbar'
import KBCard from '../Components/KBCard/KBCard'
import Modal from '../Components/Modal/Modal'
import ModalForm from '../Components/Form/Form'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      toggledStylings: null
    }
  }

  modalHandler = e => {
    if (this.state.show === true) {
      this.setState({
        show: !this.state.show,
        toggledStylings: null
      })
    } else {
      this.setState({
        show: !this.state.show,
        toggledStylings: "overlay"
      })
    }
  }

  modalOffHandler = () => {
    if (this.state.show) {
      this.modalHandler()
    } else {
      console.log("Nothing shows")
    }
  }

  render() {
    // let displayModal = null;
    // if (!this.state.show) {
    //   displayModal = <button
    //     onClick={e => { this.modalHandler() }}
    //   >Show Modal</button>
    // } else {
    //   displayModal = <button
    //     onClick={e => { this.modalHandler() }}
    //   >Hide Modal</button>
    // }

    return (
      <div className="app" >
        <Navigation />
        <div className={this.state.toggledStylings}>
          <Modal closeButton={e => { this.modalOffHandler() }} onClose={this.showModal} show={this.state.show}><ModalForm /></Modal>
        </div>
        <KBCard onclick={e => { this.modalHandler() }} />
        {/* <Button onClick={e => { this.modalHandler() }}>Add</Button> */}
      </div>
    );
  }
}

export default App;
