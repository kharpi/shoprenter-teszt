import './GridSection.css';
import GridImage1 from '../../../Assets/Grid/grid_1.jpg';
import GridImage2 from '../../../Assets/Grid/grid_2.jpg';
import GridImage3 from '../../../Assets/Grid/grid_3.jpg';
import GridImage4 from '../../../Assets/Grid/grid_4.jpg';
import GridImage5 from '../../../Assets/Grid/grid_5.jpg';
import GridImage6 from '../../../Assets/Grid/grid_6.jpg';

const Grid = () => {
	const images = [
		{
			src: GridImage1,
			lead: 'Heading',
			size: 'wide',
			position: 'left',
			color: 'primary',
		},
		{
			src: GridImage4,
			lead: 'Heading',
			size: 'small',
			position: 'left',
			color: 'secondary',
		},
		{
			src: GridImage5,
			lead: 'Heading',
			size: 'small',
			position: 'right',
			color: 'primary',
		},
		{
			src: GridImage2,
			lead: 'Heading',
			size: 'small',
			position: 'left',
			color: 'primary',
		},
		{
			src: GridImage3,
			lead: 'Heading',
			size: 'small',
			position: 'right',
			color: 'secondary',
		},

		{
			src: GridImage6,
			lead: 'Heading',
			size: 'wide',
			position: 'right',
			color: 'primary',
		},
	];
	return (
		<section className='gridsection container'>
			{images.map((image, idx) => (
				<div
					className={`gridsection__image gridsection__image--${image.size}`}
					key={`gridsection-${idx}`}
				>
					<img src={image.src} alt='' width='900' height='260' />
					<div
						className={`gridsection__content gridsection__content--${image.position} gridsection__content--${image.color}`}
					>
						{image.lead}
					</div>
				</div>
			))}
		</section>
	);
};

export default Grid;
