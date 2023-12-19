import './index.css';
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples';

function App() {
	// const tab = ['mama', 'tata', 'dzieci'];
	// let newTab = [];
	// let newTab3=[]
	// let newString;
	// for (let i = 0; i < tab.length; i++) {
	// 	newString = tab[i];
	// 	let newTabfromString = [...newString];
	// 	// let stringJoin = newTabfromString.reverse().join('');
	// 	newTabfromString.forEach(element=>{
	// 		let stringJoin = newTab3.unshift(element).join('')
			
	// 	}
		
	// }
	// console.log(newTab);
	// const string = 'pies';
	// const newString = [...string];
	// console.log(newString);
	// let newTab = [];
	// newString.forEach((element) => {
	//     newTab.unshift(element);
	// });
	// const joinTab = newTab.join('');
	// console.log(`nowa tablica odwrócona ${newTab}`);
	// console.log(`nowa tablica zlaczona w stringa ${joinTab}`);
	// console.log(joinTab);

	// 	console.log(`newString ${newString}`);

	//const lenght = newString.length;
	// let newTab = [];
	// newString.forEach((element) => {
	// 	newTab.unshift(element);
	// });
	// const joinTab = newTab.join('');
	// console.log(`nowa tablica odwrócona ${newTab}`);
	// console.log(`nowa tablica zlaczona w stringa ${joinTab}`);
	// console.log(joinTab);

	// const testPromise = new Promise((resolve, reject) => {
	// 	if (true) {
	// 		resolve('jest ok');
	// 	} else {
	// 		reject('błąd');
	// 	}
	// });
	// testPromise
	// 	.then((info) => console.log(info))
	// 	.catch((err) => console.log(err));

	// const checkAge = (age) => {
	// 	return new Promise((resolve, reject) => {
	// 		if (age >= 18) {
	// 			resolve();
	// 		} else {
	// 			reject('jestes za młody');
	// 		}
	// 	});
	// };

	// const doubleCheck = () => {
	// 	return new Promise(resolve => {
	// 		console.log('trwa sprawdzanie jeszcze raz...');
	// 		setTimeout(() => {
	// 			resolve('faktycznie się zgadza');
	// 		}, 1000);
	// 	});
	// }

	// checkAge(51)
	// 	.then(() => {
	// 		console.log('chyba możesz wejść');
	// 		return doubleCheck();
	// 	})
	// 	.then((res) => console.log(res))
	// 	.then(() => {
	// 		console.log('weryfikacja zakończona');
	// 	}).catch(error=> console.log(error))

	// TWORZENIE FUNKCJI ASYNCHRONICZNEJ
	// async function test() {
	// 	try {
	// 		await checkAge(2);
	// 		console.log('chyba możesz wejść');
	// 		await doubleCheck();
	// 		console.log('faktycznie się zgadza');
	// 		console.log('trwa sprawdzanie jeszcze raz...');
	// 	} catch {
	// 		console.log('bląd jestes za mały');
	// 	}
	// }
	// test();

	return (
		<div>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />

				<h2>Wiem, wiem, dużo jeszcze przede mną ...</h2>
			</main>
		</div>
	);
}

export default App;
