import React from 'react';
import './css/App.css';

import Blotty from './components/Blotty';

const App = () => (

  <div className="App">
    <div className="App-header">
        <h2>React Loader Animations</h2>
    </div>


      {/* LOADERS */}
    <div className="loaders">
      <Blotty/>

    </div>

  </div>

)

export default App;