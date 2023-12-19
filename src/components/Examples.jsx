import TabButton from './TabButton';
import { EXAMPLES } from '../data';
import Jokes from './Jokes';
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
import Table from './Table';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}
	

	// async function hideProgress() {
	// 	try {
	// 		await drawIndeks();
	// 		console.log('wybranie zartu');
	// 		await setTimeout(() => {
	// 			changeStateProgress();
	// 		}, 1000);
	// 		console.log('schowaj pasek');
	// 	} catch {
	// 		console.log('');
	// 	}
	// }

	let tabContent = <p>Wybierz zakładkę</p>;
	if (selectedTopic) {
		tabContent = (
			<Section title={EXAMPLES[selectedTopic].title}>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</Section>
		);
	}
	if (selectedTopic === 'suchary') {
		tabContent = <Jokes />;
	} else if (selectedTopic === 'quiz') {
		tabContent = <Table />;
	}
	return (
		<Section id='examples' title='No i jeszcze coś od siebie: '>
			<Tabs
				//buttonsContainer='menu' zamian przekazywania w komponencie Tabs mozna ustawić domyślną wartość dla buttonsContainer
				buttons={
					<>
						{/* do onSelect przypisujemy funkcje, a całe onSelect jest przekazane do komponentu tabButton i przekazane do onCLicka */}

						<TabButton
							isSelected={selectedTopic === 'quiz'}
							onSelect={() => handleSelect('quiz')}>
							Quiz
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'suchary'}
							onSelect={() => handleSelect('suchary')}>
							Suchary
						</TabButton>
					</>
				}>
				<div id='tab-content'>{tabContent}</div>
			</Tabs>

			{/* {selectedTopic} */}

			{/* PIERWSZA MOŻLIWOŚĆ PREZENTACJI WARUNKOWEJ ZA POMOCĄ OPERATORA TRÓJSKŁADNIKOWEGO
            {!selectedTopic ? (
							<p> Wybierz temat </p>
						) : (
							<div>
								<h3>{EXAMPLES[selectedTopic].title}</h3>
								<p>{EXAMPLES[selectedTopic].description}</p>
								<pre>
									<code>{EXAMPLES[selectedTopic].code}</code>
								</pre>
							</div>
						)} */}
			{/* DRUGA MOŻLIWOŚĆ ZA POMOCĄ &&
            {!selectedTopic && <p>Wybierz temat</p>}
						{selectedTopic && (
							<div>
								<h3>{EXAMPLES[selectedTopic].title}</h3>
								<p>{EXAMPLES[selectedTopic].description}</p>
								<pre>
									<code>{EXAMPLES[selectedTopic].code}</code>
								</pre>
							</div>
						)} */}
			{/* trzecia możliwość, za pomocą przypisania kodu JSX do zmiennej i wyświetlanie jej po spełnieniu warunków, wyżej dodane przed return */}
		</Section>
	);
}
