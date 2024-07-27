import './App.css';
// import BaseCounter from './components/BaseCounter';
import Counter from './components/Counter';
import Timer from './components/Timer';
// import TimerWithoutState from './components/TimerWithoutState';

function App() {
  return (
    <>
      {/* <TimerWithoutState /> */}
      <Timer />

      {/* <BaseCounter /> */}
      <Counter />
    </>
  );
}

export default App;
