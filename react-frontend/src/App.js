import React, { useEffect, useState } from 'react';
import './css/main.css';
import './css/workout.css';
import Example from './components/Example';
import Timer from './components/Timer';
import ControlPanel from './components/ControlPanel';
import WorkoutName from './components/WorkoutName';
class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      workout: {},
      dataIsLoaded: false,
      // propbably need to get difficulty from backend
    };
  }
  // used to update the state once mounted
  componentDidMount() {
    fetch('/generate_workout/easy')
    .then((res) => res.json())
    .then((data) => {
        this.setState({
            workout: data['workouts'],
            dataIsLoaded: true}
        )
    })
  }

  render() {
    // will only render when data is not fetched
    if(!this.state.dataIsLoaded)
    {
        return(
        <div className="App">
            <header>
            <a href="/">
                <img src="/static/images/clockLogo.png" alt="Clock Logo" />
                <h1>
                <span class="white-highlight">HITT</span> THE CLOCK
                </h1>
            </a>
            </header>
        </div>
        )
    }
    // what is rendered when data is fetched
    return (
      <div className="App">
        <header>
          <a href="/">
            <img src="/static/images/clockLogo.png" alt="Clock Logo" />
            <h1>
              <span class="white-highlight">HITT</span> THE CLOCK
            </h1>
          </a>
        </header>
        <WorkoutName></WorkoutName>
        <Example></Example>
        <Timer></Timer>
        <ControlPanel></ControlPanel>
      </div>
    );
  }
}

export default App;
