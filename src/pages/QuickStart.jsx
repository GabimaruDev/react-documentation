import React, { useState } from "react"
import Puma from "../image/puma.jpg"
import Pantera from "../image/pantera.jpg"


function Button() {
    return (
        <button className="t-lg border-2 w-fit mx-auto px-6 py-3">Я компонент кнопка</button>
    );
}

function MyButton() {
	let [count, setCount] = useState(0)

	function handleClick() {
		setCount(count + 1)
	}

	return (
		<button className="t-xl" onClick={handleClick}>
			Нажато {count} раз
		</button>
	)
}


export default function App() {
	const coldcarti = {
		name: "Cold Carti",
		imageUrl: "https://avatars.yandex.net/get-music-content/13529784/1aa69345.p.6487554/200x200",
		imageSize: 150
	}

	const [choice, setChoice] = useState(false)

	const animals = [
		{ id:1, title: "Elephant", pet: false},
		{ id:2, title: "Cat", pet: true},
		{ id:3, title: "Dog", pet: true},
		{ id:4, title: "Mouse", pet: false},
	];

	const listItems = animals.map(animals =>
		<li key={animals.id} style={{ color: animals.pet ? "green" : "red" }} className="t-xl" >
			{animals.title}
		</li>
	)


	function MyButton2({ count, onClick }) {
		return (
			<button className="t-xl" onClick={onClick}>
				Нажато {count} раз
			</button>
		);
	}
	function handleClick() {
		setCount(count + 1);
	}
	const [count, setCount] = useState(0);


	return (
		<div>
			<div className="flex flex-col gap-10 my-10 max-w-5xl mx-auto justify-center px-5">
				<div className="flex flex-col gap-3 text-center">
					<h2 className="t-3xl">Создание и вложение компонентов</h2>
					<Button />
				</div>
				<div className="flex flex-col gap-3 text-center">
					<h2 className="t-3xl">Отображение данных</h2>
					<div className="flex flex-col justify-center">
						<a href="https://music.yandex.ru/artist/6487554?utm_source=desktop&utm_medium=copy_link" target="_blank" rel="noreferrer" className="rounded-full mx-auto">
							<img src={coldcarti.imageUrl} style={{ width: coldcarti.imageSize }} alt="" className="rounded-full mx-auto"/>
						</a>
						<a href="https://music.yandex.ru/artist/6487554?utm_source=desktop&utm_medium=copy_link" target="_blank" rel="noreferrer" className="text-center t-2xl font-bold">{ coldcarti.name }</a>
					</div>
				</div>
				<div className="flex flex-col gap-3 text-center">
					<h2 className="t-3xl">Условный рендеринг (с использованием хука useState)</h2>
					<a className="w-fit mx-auto" href="https://www.youtube.com/watch?v=TeFyOF1Yyrk" target="_blank" rel="noreferrer"><img width={500} src={choice ? Puma : Pantera} alt="" /></a>
					<p className="t-2xl mx-auto">{choice ? ("С пумой") : ("С пантерой")}</p>
					<button onClick={() => setChoice(choice => !choice)} className="t-lg border-2 w-fit mx-auto px-6 py-3">Поменять выбор</button>
				</div>

				<div className="flex flex-col gap-3 text-center">
					<h2 className="t-3xl mx-auto">Рендеринг списков</h2>
					<p className="t-2xl">Если это домашнее животное, то отметить <span className="text-green-600">зелёным</span> цветом, иначе <span className="text-red-500">красным</span> цветом</p>
					<ul className="text-center border-2 p-5 px-10 w-fit mx-auto">
						{ listItems }
					</ul>
				</div>

				<div className="flex flex-col gap-3 mx-auto">
					<h2 className="t-3xl text-center">Счетчики</h2>
					<div className="flex max-md:flex-col gap-8 max-md:gap-5 text-center">
						<div className="flex flex-col gap-3">
							<p className="t-2xl">Обновляются отдельно</p>
							<div className="flex flex-col gap-2">
								<MyButton />
								<MyButton />
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<p className="t-2xl">Обновляются совместно</p>
							<div className="flex flex-col gap-2">
								<MyButton2 count={count} onClick={handleClick} />
								<MyButton2 count={count} onClick={handleClick} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
