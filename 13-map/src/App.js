import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  "Click me",
  "Click me press",
  "Press me",
  "Hit me",
  "Click me again",
  "Push me)",
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />
      })}

      {/* {[
        <Button onClick={incrementCount} text={texts[0]} key={index} />
        <Button onClick={incrementCount} text={texts[1]} key={index} />
        <Button onClick={incrementCount} text={texts[2]} key={index} />
        <Button onClick={incrementCount} text={texts[3]} key={index} />
        <Button onClick={incrementCount} text={texts[4]} key={index} />
        <Button onClick={incrementCount} text={texts[5]} key={index} />
      ]} */}
    </div>
  );
}

export default App;
