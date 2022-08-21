import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);
  const [palin, setPalin] = useState("");
  const [fib, setFib] = useState([]);

  const inputHandler = (x) => {
    setNum(x);
  };

  const palinHandler = (x) => {
    let size = Math.ceil(Math.log(x) / Math.log(10));
    let key = true;
    for (let i = 0; i < size / 2; i++) {
      if (x[i] !== x[size - 1 - i]) {
        key = false;
      }
    }
    setPalin(`${x} is ${key ? "" : "not"} a Palindrome.`);
  };

  const fibHandler = (val) => {
    const x = parseInt(val);
    if (x === 0) {
      setFib("[ ]");
    } else if (x === 1) {
      setFib([0]);
    } else if (x === 2) {
      setFib([0, 1]);
    } else {
      const res = [0, 1];
      for (let i = 2; i < x; i++) {
        res[i] = res[i - 1] + res[i - 2];
      }
      setFib(res);
    }
  };

  return (
    <div className="App">
      <input
        value={num}
        type="number"
        onChange={(e) => inputHandler(e.target.value)}
      />
      <br />
      <button value={num} onClick={(e) => palinHandler(e.target.value)}>
        Palindrome
      </button>
      <h3>{palin}</h3>
      <button value={num} onClick={(e) => fibHandler(e.target.value)}>
        Fibonacci
      </button>
      <h3>{fib}</h3>
    </div>
  );
}
