import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [isXNext, setIsXNext] = useState(true);
  const [status, setStatus] = useState("Tic Tac Toe Game in React Js");

  const handleClick = (index) => {
    if (data[index] !== "") return;

    const newData = [...data];
    newData[index] = isXNext ? "X" : "O";
    setData(newData);
    setIsXNext(!isXNext);

    checkWinner(newData);
  };

  const checkWinner = (newData) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        setStatus(`${newData[a]} is the Winner!`);
        return;
      }
    }

    if (!newData.includes("")) {
      setStatus("It's a Draw!");
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setIsXNext(true);
    setStatus("Tic Tac Toe Game in React Js");
  };

  const renderBox = (index) => {
    return (
      <div className="boxes" onClick={() => handleClick(index)}>
        {data[index] && (
          <img
            src={data[index] === "X" ? cross_icon : circle_icon}
            alt={data[index]}
          />
        )}
      </div>
    );
  };

  return (
    <div className='container'>
      <h1 className='title'>{status}</h1>
      <div className="board">
        <div className="row">
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </div>
        <div className="row">
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </div>
        <div className="row">
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </div>
      </div>
      <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
