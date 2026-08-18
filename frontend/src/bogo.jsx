import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { playBeep } from './sound';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function BogoSort() {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const bubbleSort = async () => {
    let currentArray = [...array];
    for (let i = 0; i < currentArray.length; i++) {
      for (let j = 0; j < currentArray.length - i - 1; j++) {
        if (currentArray[j] > currentArray[j + 1]) {
          playBeep(currentArray[j]);
          let temp = currentArray[j];
          currentArray[j] = currentArray[j + 1];
          currentArray[j + 1] = temp;
          setArray([...currentArray]);
          await sleep(5);
        }
      }
    }
  };

  return (
    <div className="app-container">
      <div className="nav-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Bogo Sort Visualizer</h1>

        <div className="complex-info">
          <p>Time Complexity: O(n²)</p>
          <p>Space Complexity: O(1)</p>
        </div>
  
        <p className="subtitle">Slow and outdated, but always reliable</p>
      </div>

      <div className="button-bar">
        <button onClick={resetArray}>Generate New Array</button>
        <button onClick={bubbleSort}>Start Bubble Sort</button>
      </div>

      <div className="bar-container">  
        {array.map((value, index) => (
          <div
            className="bar"
            key={index}
            style={{ 
              height: `${value}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BogoSort;