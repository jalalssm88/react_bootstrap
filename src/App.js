import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Slider from './components/bottom_section'
import BottomSection from './components/bottom_section'

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid" style={{padding:"0px"}}>
      <div className="row">
        <div style={{height:"40px"}} className="col-md-12"></div>
      </div>
      {/* <Navbar /> */}
    </div>
    <div className="container">
      <Slider />
      <BottomSection />
    </div>
    </React.Fragment>
  );
}

export default App;
