import { useState } from 'react';
import './App.css';
import withStyleHOC from './withStyleHOC';

function Counter({start}: {start: number}) {
  const [count, setCount] = useState(start);
  return(
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

function Greetings({message}: {message: string}) {
  return <h1>Hello, {message}</h1>
}

const App = () => {
  const GreenCounter = withStyleHOC(Counter, {border: '1px solid green'});
  const RedCounter = withStyleHOC(Counter, {border: '1px solid red'});
  const PinkMsg = withStyleHOC(Greetings, {color: 'pink'});

  return (
    <div className="content">
      <PinkMsg message='HOC!' />
      <GreenCounter start={5} />
      <RedCounter start={7} />
    </div>
  );
};

export default App;
