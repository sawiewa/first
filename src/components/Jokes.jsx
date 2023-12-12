import './Jokes.css';
import { JOKES } from '../jokes';
import { useState } from 'react';

export default function Jokes() {
	const [selectedJoke, setSelectedJoke] = useState('');
	const [visibilityProgress, setvisibilityProgress] = useState(false);
	const [visibilityAnswer, setvisibilityAnswer] = useState(false);
	// const [visibilityButtonAnswer, setVisibilityButtonAnswer] = useState(false);
	const [contentDrawButton, setContentDrawButton] = useState('Losuj suchara');
	// const [indexJoke, setIndexJoke] = useState();

	function handleShowAnswer() {
		setvisibilityAnswer(true);
	}

	const jokesLenght = JOKES.length;
	function drawIndeks() {
		const indexJoke = Math.round(Math.random() * (jokesLenght - 1));

		setTimeout(changeStateProgress, 1000);
		setvisibilityAnswer(false);
		setContentDrawButton('Losujemy');
		setSelectedJoke(JOKES[indexJoke]);
		setvisibilityProgress(true);
		// setIndexJoke(indexJoke);
	}

	function changeStateProgress() {
		setvisibilityProgress(false);
	}
	async function hideProgress() {
		try {
			await drawIndeks();
			await setTimeout(() => {
				changeStateProgress();
				setContentDrawButton('Nowe losowanie');
			}, 500);
		} catch {
			console.log('błąd');
		}
	}

	return (
		<>
			<button className='buttonJoke' onClick={hideProgress}>
				{contentDrawButton}
			</button>
			{visibilityProgress && <progress></progress>}
			{contentDrawButton === 'Nowe losowanie' ? (
				<p>
					{/* Dowcip numer {indexJoke} :  */}
					{selectedJoke.question}
				</p>
			) : (
				<p className='beforDraw'>Tu będzie wylosowane pytanie</p>
			)}
			{!visibilityAnswer && selectedJoke && (
				<button onClick={handleShowAnswer}>Odsłoń odpowiedź</button>
			)}
			{visibilityAnswer && <p className='answer'>{selectedJoke.answer}</p>}
		</>
		//
	);
}
