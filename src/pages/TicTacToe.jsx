const TicTacToe = () => {
    return (
        <div className="max-w-fit mx-auto h-[calc(100svh-4rem)] flex flex-col justify-center">
            <div className="board-row">
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="board-row">
                <button>4</button>
                <button>5</button>
                <button>6</button>
            </div>
            <div className="board-row">
                <button>7</button>
                <button>8</button>
                <button>9</button>
            </div>
        </div>
    );
}

export default TicTacToe;