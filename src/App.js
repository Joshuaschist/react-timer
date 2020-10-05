import React, { Component } from 'react';

import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';

class App extends Component {
  render() {
   return (  
     <div className="App">
     <div className="App-title">Timer</div>
     <div className="Timer">
      <Stopwatch />
      <Countdown />
     </div>
     </div>
  );
 }
} 

export default App;