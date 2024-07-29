import { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {showTimer && (
        <>
          <Timer />
          <button  onClick={() => setShowTimer(false)}>TurnOff</button>
        </>
      )}
      {!showTimer && (
        <button onClick={() => setShowTimer(true)}>ShowTimer</button>
      )}
    </>
  );
}

export default App;
