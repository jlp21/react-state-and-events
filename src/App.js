import './App.css';
import Counter from './Components/Counter';
import { useState } from 'react';
import WeatherWidget from './Components/WeatherWidget';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  const [unit, setUnit] = useState('C');

  return (
    <div className={'App ' + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <div>
        <WeatherWidget city="Miami" icon="" celsius={29} unit={unit} />
      </div>

      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>


    </div>


  );
}

export default App;
