import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({onSelectSquare, turns}) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    //
    //
    // function handleSelectSquare(rowIndex, cellIndex, symbol) {
    //     setGameBoard((prevGameBoard) => {
    //         // Deep copy for immutability
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         newGameBoard[rowIndex][cellIndex] = symbol
    //         return newGameBoard
    //     })
    //     onSelectSquare()
    // }

    let gameBoard = initialGameBoard
    for (let turn of turns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    }


    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) =>
                    <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol, cellIndex) =>
                                    <li key={cellIndex}>
                                        <button
                                            onClick={() => onSelectSquare(rowIndex, cellIndex)}
                                            disabled={playerSymbol !== null}
                                        >
                                            {playerSymbol}
                                        </button>
                                    </li>
                                )
                            }
                        </ol>
                    </li>
                )
            }
        </ol>
    )
}