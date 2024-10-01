const Main = () => {
    return (
        <div className="flex flex-col max-w-screen-xl h-[calc(100svh-4rem)] mx-auto justify-center items-center text-center px-5">
            <div className="flex flex-col gap-3 justify-center">
                <h1 className="font-bold text-4xl mx-auto">Привет, я Gabimaru</h1>
                <p className="text-2xl">Это один из моих первых проектов по
                    <a href="https://react.dev/" className="text-blue-600" target="_blank" rel="noreferrer"> React</a>
                    , он не столько творческий сколько учебный, решил сделать его по&nbsp;
                    <a href="https://react.dev/learn" className="text-blue-600" target="_blank" rel="noreferrer">документации</a>
                    , также я использую
                    <a href="https://tailwindcss.com/" className="text-blue-600" target="_blank" rel="noreferrer"> Tailwind CSS </a>
                    для&nbsp;большей скорости&nbsp;написания проекта&nbsp;и&nbsp;удобства
                </p>
            </div>
        </div>
    );
}

export default Main;