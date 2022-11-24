import { useState, useEffect } from 'react';
import Button from "./Button"
import styles from "./App.module.css"


function App() {
  const [counter, setCounter] = useState(0);
  const click = () => {
    setCounter((hey) => hey + 1);
  };
  const runOnly = () => {
    console.log("hi")
  }
  useEffect(runOnly, []) // 첫 render 시점에 동작
  console.log("render")
  return (
    <div className={styles.title}>
      <h1>Wellcome!</h1>
      <h2>{counter}</h2>
      <button onClick={click}>hii</button>
      <Button text="click on" />
    </div>
  );
}

export default App;
