import { useState } from "react";
import Board from "./components/Board";


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

	let moves = history.map((squares, move) => {
		let description
		if (move === currentMove && currentMove === 0) {
			description = (move + 1) + ". Вы в начале игры"
		} else if (move === currentMove) {
			description = (move + 1) + ". Вы на ходe №" + move
		} else if (move > 0 && move !== currentMove) {
			description = (move + 1) + ". Перейти на ход №" + move
		} else {
			description = (move + 1) + ". Перейти к началу игры"
		}

		return (
			<li key={move}>
				<button style={move === currentMove ? {'fontWeight': '600'} : {'fontWeight': 'normal'}} onClick={() => jumpTo(move)}>{description}</button>
			</li>
		)
	})

	const [reverse, setReverse] = useState(false)
	function reverseHistory() {
		setReverse(!reverse)
	}

    return (
        <div className="max-w-fit mx-auto min-h-[calc(100svh-6.5rem)] flex max-sm:flex-col items-center my-5 gap-5">
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            <div className="flex flex-col max-sm:gap-5">
				<button onClick={reverseHistory}>{reverse ? "Сортировать по возрастанию" : "Сортировать по убыванию"}</button>
                <ol className="flex flex-col gap-1.5 pb-1 sm:pt-5 min-w-56 t-lg">{reverse ? moves.reverse() : moves}</ol>
            </div>
        </div>
    );
}