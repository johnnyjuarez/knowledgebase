import React, { Fragment, Component } from 'react';
import Navigation from '../Components/Navbar/Navbar'
import KBCard from '../Components/KBCard/KBCard'
import Modal from '../Components/Modal/Modal'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <KBCard />
        <button onClick={e => {
          this.showModal();
        }}>Show Modal</button>
        <Modal onClose={this.showModal} show={this.state.show}>Message in Modal</Modal>
      </Fragment >
    );
  }
}

export default App;
