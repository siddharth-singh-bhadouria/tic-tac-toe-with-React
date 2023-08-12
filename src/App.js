import React from 'react'
import Board from './Components/Board';
import { useState } from 'react'

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length - 1]
  const nextSquares = currentSquare.slice()

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} nextSquares={nextSquares} />
      </div>
      <div className="game-info">
        <ol>{ }</ol>
      </div>
    </div>
  )
}


