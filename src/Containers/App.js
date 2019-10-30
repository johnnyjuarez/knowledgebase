import React, { Fragment } from 'react';
import Navigation from '../Components/Navbar/Navbar'
import KBCard from '../Components/KBCard/KBCard'
import './App.css';

function App() {
  return (
    <Fragment>
      <Navigation />
      <KBCard />
    </Fragment>
  );
}

export default App;
