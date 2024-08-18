import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };
  const dobuleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={(e) => setDark((prevThem) => !prevThem)}>
        Change Theme
      </button>
      <div style={themeStyle}>{dobuleNumber}</div>
    </>
  );
}

function slowFunction(number) {
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default App;
