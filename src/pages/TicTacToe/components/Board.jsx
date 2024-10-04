export default function Board({ xIsNext, squares, onPlay }){
	function Square({ value, onSquareClick, winningSquare }) {
		const winningSquareStyle = {
			backgroundColor: '#75ff75'
		};
		
		return <button style={winningSquare ? winningSquareStyle : null} onClick={onSquareClick}>{value}</button>
	}
	
	function renderSquare(i) {
		let winningSquare = winner && winner.winningSquares.includes(i) ? true : false;
		return <Square key={i} value={squares[i]} winningSquare={winningSquare} onSquareClick={() => handleClick(i)} />
	}

	const winner = calculateWinner(squares)
	function handleClick(i) {
		if (squares[i] || winner) {
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
		status = "Победитель: " + winner.winner
	} else if (squares.indexOf(null) === -1) {
		status = "Ничья!"
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
		const [a, b, c] = lines[i]
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return ({
				winner: squares[a],
				winningSquares: lines[i]
			})
		}
	}
	return null
}