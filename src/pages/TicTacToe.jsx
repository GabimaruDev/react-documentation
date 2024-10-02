import { useState } from "react";


function Board({ xIsNext, squares, onPlay }){
	function Square({ value, onSquareClick }) {
		return <button onClick={onSquareClick}>{value}</button>
	}
	
	function renderSquare(i) {
		return <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
	}


	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]
			}
		}
		return null
	}

	const winner = calculateWinner(squares)

	function handleClick(i) {
		if (winner || squares[i]) {
			return
		}

		const nextSquares = squares.slice()
		if (xIsNext) {
			nextSquares[i] = "X"
		} else {
			nextSquares[i] = "O"
		}
		onPlay(nextSquares);
	}


	let status
	if (winner) {
		status = "Победитель: " + winner
	} else {
		status = "Следующий ход: " + (xIsNext ? "X" : "O")
	}

	const rows = 3
	const cells = 3

	return (
		<div className="flex flex-col">
            <div className="mx-auto t-xl py-2 text-center">{status}</div>
			{[...Array(rows).keys()].map(row => (
				<div className="board-row" key={row}>
					{[...Array(cells).keys()].map(cell => renderSquare(row * cells + cell))}
				</div>
        	))}
		</div>
	)
}



export default function TicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
    }

	function jumpTo(move) {
		setCurrentMove(move)
	}

	const moves = history.map((squares, move) => {
		let description
		if (move == currentMove && currentMove == 0) {
			description = "Вы в начале игры"
		} else if (move == currentMove) {
			description = "Вы на ходe №" + move
		} else if (move > 0 && move != currentMove) {
			description = "Перейти на ход №" + move
		} else {
			description = "Перейти к началу игры"
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})

    return (
        <div className="max-w-fit mx-auto min-h-[calc(100svh-6.5rem)] flex max-sm:flex-col items-center my-5 gap-10 max-sm:gap-2">
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div>
                <ol className="flex flex-col gap-1.5 sm:pt-11 list-decimal min-w-52 t-lg">{moves}</ol>
            </div>
        </div>
    );
}