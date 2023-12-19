import QuestionButton from './QuestionButton';
export default function ColumnQuestion({ category, onSelect, tableQestions }) {
	tableQestions.sort((a, b) => {
		return a.point - b.point;
	});

	return (
		<div className='columna'>
			<div>
				<p>{category}</p>
			</div>
			{tableQestions.map(
				(item, index) =>
					item.categotry === category && (
						<QuestionButton
							key={`${item.id}${item.point}`}
							idselectedbutton={item.id}
							index={index}
							onSelectButton={onSelect}>
							{item.point}
						</QuestionButton>
					)
			)}
		</div>
	);
}
