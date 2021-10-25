import { ReactComponent as GlassIcon } from '../../../Assets/Icons/glass-icon.svg';
import './HighlightedRow.css';

const HighlightedRow = () => {
	return (
		<section className='highlighted-row'>
			<div className='highlighted-row__icon'>
				<GlassIcon />
			</div>
			<div className='highlighted-row__text'>
				Kizárólag növényi eredetű alkotó elemek
			</div>
		</section>
	);
};

export default HighlightedRow;
