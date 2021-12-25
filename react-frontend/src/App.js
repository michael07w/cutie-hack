import React, { useEffect , useState} from 'react';
import './css/main.css';
import './css/workout.css';
import Example from './components/Example';
import Timer from './components/Timer';
import ControlPanel from './components/ControlPanel';
function App() {
  // the generated workout state of the page
  const [workout,setWorkout] = useState([{}])
  // fetching generated workout into the state
  useEffect(() => {
    fetch("/generate_workout/easy").then(
      res => res.json()).then(
        randomWorkout => {
          setWorkout(randomWorkout['workouts'])
          console.log(randomWorkout['workouts'])
        }
      )
  },[])

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
      <h2 className="workout-name">{workout[0]['workout']}</h2>
      <Example></Example>
      <Timer></Timer>
      <ControlPanel></ControlPanel>
    </div>
  );
}


export default App;
