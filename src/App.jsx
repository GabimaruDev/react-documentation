function Button() {
    return (
        <button className="border-2 p-3 w-fit mx-auto">Я компонент кнопка</button>
    );
}


export default function App() {
	const coldcarti = {
		name: "Cold Carti",
		imageUrl: "https://avatars.yandex.net/get-music-content/13529784/1aa69345.p.6487554/200x200",
		imageSize: 100
	}

	return (
		<div className="App">
			<div className="flex flex-col gap-16 max-w-5xl mx-auto justify-center">
				<div className="flex flex-col gap-3 mx-auto">
					<h1 className="font-bold text-4xl mx-auto pt-8 pb-6">Привет, я Gabimaru</h1>
					<p className="text-2xl">Это один из моих первых проектов по React, он не столько творческий сколько учебный, решил сделать его по&nbsp;
						<a href="https://react.dev/learn" className="text-blue-600" target="_blank" rel="noreferrer">этой документации</a>
					, также я использую <a href="https://tailwindcss.com/" className="text-blue-600" target="_blank" rel="noreferrer">Tailwind CSS</a> для большей скорости написания проекта и удобства
					</p>
				</div>
				<div className="flex flex-col gap-3 mx-auto">
					<h2 className="text-3xl">Создание и вложение компонентов</h2>
					<Button />
				</div>
				<div className="flex flex-col gap-3 mx-auto">
					<h2 className="text-3xl">Отображение данных</h2>
					<div className="flex flex-col justify-center">
						<a href="https://music.yandex.ru/artist/6487554?utm_source=desktop&utm_medium=copy_link" className="rounded-full mx-auto">
							<img src={coldcarti.imageUrl} style={{ width: coldcarti.imageSize }} alt="" className="rounded-full mx-auto"/>
						</a>
						<h3 className="text-center text-2xl">{ coldcarti.name }</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
