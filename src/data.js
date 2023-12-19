import heartImg from './assets/heart.jpg';
import osiolImg from './assets/osiol.jpg';
import drzewoImg from './assets/drzewo.jpg';
import wszystkoImg from './assets/wszystko.png';
export const QUESTIONS100 = [
	{
		categotry: 'JS',
		point: 200,
		question: 'Ternary operator',
		id: 1,
	},
	{
		categotry: 'HTML/CSS',
		point: 300,
		question: 'Co to jest specyficzność CSS?',
		id: 1,
	},
	{
		categotry: 'JS',
		point: 300,
		question: 'Czym różni się forEach od map?',
		id: 2,
	},
	{
		categotry: 'React',
		point: 300,
		question: 'Co to są state i props? Jakie są różnice?',
		id: 3,
	},
	{
		categotry: 'HTML/CSS',
		point: 300,
		question: 'Co to jest Flexbox?',
		id: 4,
	},
	{
		categotry: 'JS',
		point: 300,
		question:
			'Jak odwrócić kolejność liter w wyrazie nie używając metody reverse()?',
		id: 5,
	},
	{
		categotry: 'JS',
		point: 500,
		question: 'Co to jest Event Loop?',
		id: 6,
	},
	{
		categotry: 'JS',
		point: 400,
		question: 'Promisy',
		id: 7,
	},
	{
		categotry: 'JS',
		point: 400,
		question: 'Co powiesz na temat funkcji asynchronicznych',
		id: 8,
	},
	{
		categotry: 'HTML/CSS',
		point: 100,
		question: 'Czym się róznic div od spana?',
		id: 9,
	},
	{
		categotry: 'HTML/CSS',
		point: 100,
		question: 'Display none a Visibility Hidden, jaka jest różnica?',
		id: 10,
	},
	{
		categotry: 'JS',
		point: 100,
		question: 'Co to są falsy value?',
		id: 12,
	},
	{
		categotry: 'React',
		point: 100,
		question: 'Co to jest React i jakie są jego zalety?',
		id: 13,
	},
	{
		categotry: 'React',
		point: 300,
		question: 'Co powoduje ponowny rerender komponentu Reactowego?',
		id: 15,
	},
	{
		categotry: 'JS',
		point: 200,
		question: 'Co to jest "Optional chaining?',
		id: 16,
	},
	{
		categotry: 'React',
		point: 100,
		question:
			'Nazwa atrybutu przypisującego labela ze struktury HTML do inputu w React?',
		id: 17,
	},
	{
		categotry: 'JS',
		point: 100,
		question: 'Co to jest Template literals?',
		id: 17,
	},
	{
		categotry: 'React',
		point: 1000,
		question: 'Redux-Saga',
		id: 18,
	},
];

export const CORE_CONCEPTS = [
	{
		image: heartImg,
		title: 'Znam Was',
		description:
			'Nie musicie się zastanawiać jakim jestem człowiekiem, bo już to Wiecie.',
	},
	{
		image: wszystkoImg,
		title: 'Znam aplikację',
		description:
			'Wiem, jak działa aplikacja, to ze 2 dni mniej wdrażania i nie będę mieć tygodnia onboardingu   :)',
	},
	{
		image: osiolImg,
		title: 'Jestem uparta',
		description: 'To moja SUPERMOC',
	},
	{
		image: drzewoImg,
		title: 'Jestem cierpliwa',
		description:
			'i daję z siebie wszystko żeby osiągnąć cel "Im dalej w las, tym więcej tlenu"',
	},
];

export const EXAMPLES = {
	components: {
		title: 'Components',
		description:
			'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
		code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
	},
	suchary: {
		title: 'Suchary',
		description: 'Wylosuj suchara',
		code: '',
	},
	quiz: {
		title: 'Quiz',
		description: 'wybierze pytanie',
		code: '',
	},
	jsx: {
		title: 'JSX',
		description:
			'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
		code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
	},
	props: {
		title: 'Props',
		description:
			'Components accept arbitrary inputs called props. They are like function arguments.',
		code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
	},
	state: {
		title: 'State',
		description:
			'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
		code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
	},
};
