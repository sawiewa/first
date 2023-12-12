import heartImg from './assets/heart.jpg';
import osiolImg from './assets/osiol.jpg';
import drzewoImg from './assets/drzewo.jpg';
import wszystkoImg from './assets/wszystko.png';

export const CORE_CONCEPTS = [
	{
		image: heartImg,
		title: 'Znam Was',
		description: 'Pozwólcie mi dołączyć do tego Waszego kolorowego frontendowego świata, gdzie każdy dzień to nowy div, a każdy projekt to przygoda. I nie musicie się zastanawiać jakim jestem człowiekiem, bo już to Wiecie.',
	},
	{
		image: wszystkoImg,
		title: 'Znam aplikację',
		description: 'Wiem, jak działa aplikacja, tak jak znam swoje ulubione bajki z dzieciństwa. Teraz wystarczy tylko przetłumaczyć te bajkowe opowieści na język programowania.',
	},
	{
		image: osiolImg,
		title: 'Jestem uparta',
		description:
			'Upór to moja SUPERMOC, ulubione powiedzenie to "im dalej w las, tym więcej tlenu"',
	},
	{
		image: drzewoImg,
		title: 'Jestem cierpliwa',
		description:
			'MATKA FILIPA Cierpliwość w dążeniu do celu to nie tylko cecha charakteru, to filozofia życia. Bo kiedy docieramy na szczyt góry naszych marzeń, spojrzymy w dół i zrozumiemy, że każdy trud był wart tej wspinaczki.',
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
