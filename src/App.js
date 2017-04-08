import React from 'react';

import LoaderDetail from './loaders/LoaderDetail';
import Blotty from './loaders/Blotty';
import GSpinner from './loaders/GSpinner';
import Pulse from './loaders/Pulse';
import AMCDots from './loaders/AMCDots';

const App = () => (

  <div className="App">
    <div className="App-header">
        <h1>React Animation Loaders</h1>
    </div>


    {/* LOADERS */}
    <div className="loaders">
      <LoaderDetail name="GSpinner" credit="Christian Eckenrode" creditLinkText="g-spinner"
              creditLink="https://github.com/ceckenrode/g-spinner" credited>

        {/* G Spinner */}
        <GSpinner/>

      </LoaderDetail>
      <LoaderDetail name="Blotty" credit="Joe Harry" creditLinkText="Samsung TV Loader"
              creditLink="https://codepen.io/woodwork/pen/YWjWzo" inspired>

        {/* Blotty */}
        <Blotty/>

      </LoaderDetail>
      <LoaderDetail name="Pulse">

        {/* Pulse */}
        <Pulse/>

      </LoaderDetail>
      <LoaderDetail name="AMCDots" credit="AMC Theatre" creditLinkText="pulsing dots"
              creditLink="https://www.amctheatres.com/" inspired>

        {/* AMCDots */}
        <AMCDots/>

      </LoaderDetail>
    </div>
  </div>
)

export default App;