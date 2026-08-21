import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { playBeep } from './sound';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


  function randomize(array){  /* https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array  */
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  }

  function sorted(array){
    for (let i=0; i<array.length-1; i++){
      if (array[i]>array[i+1]){
        return false;
      }
    }
    return true;
  }


function BogoSort() {
  const [array, setArray] = useState([]);
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 8; i++) {
      newArray.push(Math.floor(Math.random() * 500) + 10);
    }
    setArray(newArray);
    setCounter(0);
    setTime(0);
  };

  useEffect(() => {
    resetArray();
  }, []);
  


  const runBogoSort = async () => {
    let currentArray = [...array];
    let shuffles= 0;
    const startTime = Date.now();
    while (!sorted(currentArray) ){
      randomize(currentArray);
      playBeep(currentArray[0]);
      setArray([...currentArray]);

      const secondsPassed = ((Date.now() - startTime) / 1000); //gets time by subtracting the current time with when the loop started, then dividing by 1000 to get seconds
      setTime(secondsPassed);

      shuffles++;
      setCounter(shuffles);
      await sleep(100);
      }
    }
    



  return (
    <div className="app-container">
      <div className="nav-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Bogo Sort Visualizer</h1>

        <div className="complex-info">
          <p>Time Complexity: O((n+1)!)</p>
          <p>Space Complexity: O(1)</p>
        </div>
  
        <p className="subtitle">"The struggle itself towards the heights is enough to fill a man's heart. One must imagine Bogo Sort happy."</p>
      </div>

      <div className="button-bar">
        <button onClick={resetArray}>Generate New Array</button>
        <button onClick={runBogoSort}>Start Bogo Sort</button>
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
      <div className="complex-info">
        <p>Shuffles: {counter}</p>
        <p>Time: {time} </p>
      </div>
    </div>
  );
}

export default BogoSort;