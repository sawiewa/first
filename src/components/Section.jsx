export default function Section({ children, title, ...props }) {
	return (
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

//... props mówi zeby zabrały się wszystkie atrybuty które zostały nadane na niestandardowych komponentach, tak jak tutaj id='examples'
