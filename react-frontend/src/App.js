import logo from './logo.svg';
import './App.css';
import './CSS/main.css'
import Example from './components/Example';

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
    </div>
  );
}

export default App;
