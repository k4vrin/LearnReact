import {useState} from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS = {
    X: "Player 1",
    O: "Player 2"
}
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function derivedActivePlayer(gameTurns) {
    let currentPlayer = "X"
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O"
    }
    return currentPlayer
}

function derivedWinner(gameBoard, players) {
    let winner
    for (const comb of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[comb[0].row][comb[0].col]
        const secondSquareSymbol = gameBoard[comb[1].row][comb[1].col]
        const thirdSquareSymbol = gameBoard[comb[2].row][comb[2].col]
        console.log(`${firstSquareSymbol} ${secondSquareSymbol} ${thirdSquareSymbol}`)
        if (
            firstSquareSymbol !== null &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol]
        }
    }
    return winner
}

function derivedGameBoard(gameTurns) {
    const gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]
    for (let turn of gameTurns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    }
    return gameBoard
}

function App() {
    const [players, setPlayers] = useState(PLAYERS)
    const [gameTurns, setGameTurns] = useState([])
    const activePlayer = derivedActivePlayer(gameTurns)
    const gameBoard = derivedGameBoard(gameTurns)
    const winner = derivedWinner(gameBoard, players)
    const hasDraw = gameTurns.length === 9 && !winner

    function handleSelectSquare(rowIndex, colIndex) {
        const currentPlayer = derivedActivePlayer(gameTurns)
        setGameTurns(prevTurns => {
            return [
                {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
                ...prevTurns
            ]
        })
    }

    function handleRematch() {
        setGameTurns([])
    }

    function handlePlayerNameChange(symbol, newName) {
        setPlayers(prevPlayers => {
                return {
                    ...prevPlayers,
                    [symbol]: newName
                }
            }
        )
    }

    return <main>
        <div id="game-container">
            <ol id="players" className={"highlight-player"}>
                <Player name={PLAYERS.X} symbol={"X"} isActive={activePlayer === "X"}
                        onNameChange={handlePlayerNameChange}></Player>
                <Player name={PLAYERS.O} symbol={"O"} isActive={activePlayer === "O"}
                        onNameChange={handlePlayerNameChange}></Player>
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}/>}
            <GameBoard
                onSelectSquare={handleSelectSquare}
                gameBoard={gameBoard}
            />
        </div>
        <Log turns={gameTurns}/>
    </main>
}

export default App
