import '../index.css';
import { QUESTIONS100 } from '../data';
import { useState } from 'react';
import ColumnQuestion from './ColumnQuestion';
import Modal from './Modal';
import { useRef } from 'react';

export default function Table() {
	const [selectQuestion, setSelectQuestion] = useState(0);

	const modal = useRef();
	//let text;

	function handleSelect(index) {
		setSelectQuestion(index);
		modal.current.open();
	}

	let modalQuestionContent = <h1>{QUESTIONS100[selectQuestion].question}</h1>;
	return (
		<>
			<Modal ref={modal} buttonCaption='Zamknij'>
				{modalQuestionContent}
			</Modal>
			{/* <div>{text}</div> */}
			<div className='contener'>
				<ColumnQuestion
					category='JS'
					onSelect={handleSelect}
					tableQestions={QUESTIONS100}
				/>
				<ColumnQuestion
					category='HTML/CSS'
					onSelect={handleSelect}
					tableQestions={QUESTIONS100}
				/>
				<ColumnQuestion
					category='React'
					onSelect={handleSelect}
					tableQestions={QUESTIONS100}
				/>
			</div>
		</>
	);
}
