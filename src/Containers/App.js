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
      toggledStylings: null
    }
  }

  showModal = e => {
    this.setState({
      show: !this.state.show,
      toggledStylings: "modal"
    })
  }

  render() {
    let displayModal = null;
    if (!this.state.show) {
      displayModal = <button
        onClick={e => { this.showModal() }}
      >Show Modal</button>
    } else {
      displayModal = <button
        onClick={e => { this.showModal() }}
      >Hide Modal</button>
    }

    return (
      <div className={this.state.toggledStylings}>
        <Navigation />
        <KBCard />
        {displayModal}
        <Modal onClose={this.showModal} show={this.state.show}>Message in Modal</Modal>
      </div>
    );
  }
}

export default App;
