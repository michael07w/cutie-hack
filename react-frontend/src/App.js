import logo from './logo.svg';
import './css/main.css'
import './css/workout.css'
import Example from './components/Example';
import Timer from './components/Timer'
import ControlPanel from './components/ControlPanel';


function App() {
  return (
    <div className="App">
      <header>
        <a href="/">
          <img src="/static/images/clockLogo.png" alt="Clock Logo" />
          <h1><span class="white-highlight">HITT</span> THE CLOCK</h1>
        </a>
      </header>
      <h2 className= 'workout-name'>Pushups</h2>
      <Example></Example>
      <Timer></Timer>
      <ControlPanel></ControlPanel>
    </div>
  );
}

export default App;
