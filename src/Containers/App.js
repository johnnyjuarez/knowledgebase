import React, { Component } from 'react';
import Navigation from '../Components/Navbar/Navbar'
import KBCard from '../Components/KBCard/KBCard'
import Modal from '../Components/Modal/Modal'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      toggledStylings: null,
      cardArr: [{
        title: "Title",
        description: "Description",
        details: "Details"
      },
      {
        title: "Test",
        description: "Test Descript",
        details: "Test details"
      },
      {
        title: "Test",
        description: "Test Descript",
        details: "Test details"
      },
      {
        title: "Test",
        description: "Test Descript",
        details: "Test details"
      },

      ]
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

    return (
      <div className="app" >
        <Navigation />
        <div className={this.state.toggledStylings}>
          <Modal closeButton={e => { this.modalOffHandler() }} onClose={this.showModal} show={this.state.show}></Modal>
        </div>
        <KBCard cardArr={this.state.cardArr} onclick={e => { this.modalHandler() }} />
      </div>
    );
  }
}

export default App;
