import { useRef, useState } from 'react';
import { useOuterClick } from '../../../Utils/useOuterClick';
import './Dropdown.css';

const Dropdown = (props) => {
	const [active, setActive] = useState(0);
	const wrapperRef = useRef(null);

	useOuterClick(wrapperRef, active, () => {
		setActive(0);
	});

	let classes = 'dropdown ';
	classes += props.classes.join(' ');

	return (
		<div className={`${classes}  ${active && 'opened'}`} ref={wrapperRef}>
			<div
				className='dropdown__title'
				onClick={() => {
					setActive(!active);
				}}
			>
				{props.title}
				<div className='dropdown__opener'>&#8249;</div>
			</div>
			<ul className='dropdown__wrapper'>
				{props.items.map((item, idx) => (
					<li
						className='dropdown__item'
						key={`dropdown-${idx}`}
						onClick={() => setActive(0)}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
