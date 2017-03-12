import React from 'react';
import './css/App.css';

import Loader from './components/Loader';
import Blotty from './components/Blotty';
import GSpinner from './components/GSpinner';
import Pulse from './components/Pulse';
import AMCDots from './components/AMCDots';
import FBLoadingBar from './components/FBLoadingBar';

const App = () => (

  <div className="App">
    <div className="App-header">
        <h2>React Loader Animations</h2>
    </div>


    {/* LOADERS */}
    <div className="loaders">
      <Loader name="GSpinner" credit="Christian Eckenrode" creditLinkText="g-spinner"
              creditLink="https://github.com/ceckenrode/g-spinner" credited>

        {/* G Spinner */}
        <GSpinner/>

      </Loader>
      <Loader name="Blotty" credit="Joe Harry" creditLinkText="Samsung TV Loader"
              creditLink="https://codepen.io/woodwork/pen/YWjWzo" inspired>

        {/* Blotty */}
        <Blotty/>

      </Loader>
      <Loader name="Pulse">

        {/* Pulse */}
        <Pulse/>

      </Loader>
      <Loader name="AMCDots" credit="AMC Theatre" creditLinkText="pulsing dots"
              creditLink="https://www.amctheatres.com/" inspired>

        {/* AMCDots */}
        <AMCDots/>

      </Loader>
      <Loader name="FBLoadingBar" >

        {/* FBLoadingBar */}
        <FBLoadingBar/>

      </Loader>
    </div>
  </div>
)

export default App;