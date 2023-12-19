import { useState } from 'react';
export default function QuestionButton({ children, onSelectButton, index }) {
	const [selectedButton, setSelectedButton] = useState(false);
	function handleSelectedButton() {
		setSelectedButton(!selectedButton);
	}

	return (
		<button
			className={selectedButton ? 'selected' : undefined}
			onClick={() => {
				onSelectButton(index);
				handleSelectedButton();
			}}>
			{children}
		</button>
	);
}
