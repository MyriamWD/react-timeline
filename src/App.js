import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';

import Timeline from './components/Timeline';


class App extends Component {

  render() {

    const timeLineDataArray = timelineData.events
    

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        
          <Timeline events={timeLineDataArray}/>
        </main>
      </div>
    );
  }
}

export default App;
