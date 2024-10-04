const Header = () => {
    return (
        <div className="bg-gray-300 h-16 t-xl flex items-center sticky top-0 justify-center text-center px-2 gap-[clamp(1.125rem,0.9375rem+0.75vw,1.5rem)]">
            <a href="/react-documentation/">Главная</a>
            <a href="/react-documentation/quickstart">Quick Start</a>
            <a href="/react-documentation/tic-tac-toe">Tic-Tac-Toe</a>
        </div>
    );
}

export default Header;