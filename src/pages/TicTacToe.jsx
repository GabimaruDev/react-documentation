import { useState } from "react";


function Square({ value, onSquareClick }) {
	return <button onClick={onSquareClick}>{value}</button>
}


function Board({ xIsNext, squares, onPlay }){
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


	return (
		<div>
            <div className="mx-auto text-xl py-2 text-center">{status}</div>
			<div className="board-row">
				<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
				<Square value={squares[1]} onSquareClick={() => handleClick(1)} />
				<Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row">
				<Square value={squares[3]} onSquareClick={() => handleClick(3)} />
				<Square value={squares[4]} onSquareClick={() => handleClick(4)} />
				<Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row">
				<Square value={squares[6]} onSquareClick={() => handleClick(6)} />
				<Square value={squares[7]} onSquareClick={() => handleClick(7)} />
				<Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
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
		if (move > 0) {
			description = "Перейти на ход №" + move
		} else {
			description = "Перейти к началу игры"
		}

		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)} >{description}</button>
			</li>
		)
	})

    return (
        <div className="max-w-fit mx-auto h-[calc(100svh-9rem)] flex max-sm:flex-col items-center my-5 gap-10 max-sm:gap-0">
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div>
                <ol className="flex flex-col gap-[0.22rem] sm:pt-11 list-decimal">{moves}</ol>
            </div>
        </div>
    );
}