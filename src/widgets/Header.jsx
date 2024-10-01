const Header = () => {
    return (
        <div className="bg-gray-300 h-16 px-5 flex items-center sticky top-0 justify-center gap-10 text-xl">
            <a href="/">Главная</a>
            <a href="/quickstart">Quick Start</a>
            <a href="/tic-tac-toe">Tic-Tac-Toe</a>
        </div>
    );
}

export default Header;