import { ReactComponent as StarIcon } from '../../../Assets/Icons/star-icon.svg';
import { ReactComponent as StarIconFilled } from '../../../Assets/Icons/star-icon-filled.svg';
import './Rating.css';

const Rating = ({ stars, count }) => {
	const starsArray = [];
	for (let i = 0; i < 5; i++) {
		if (stars - 1 >= i) {
			starsArray.push(1);
		} else starsArray.push(0);
	}
	return (
		<div className='rating'>
			{starsArray.map((star, idx) => (
				<div key={`star-${idx}`} className='rating__star'>
					{star ? <StarIconFilled /> : <StarIcon />}
				</div>
			))}
			<div className='rating__count'>({count})</div>
		</div>
	);
};

export default Rating;
