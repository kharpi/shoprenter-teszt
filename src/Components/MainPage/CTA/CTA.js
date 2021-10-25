import CtaImage from '../../../Assets/CTA/cta-1.jpg';
import Button from '../../UI/Button/Button';
import './CTA.css';

const CTA = () => {
	return (
		<section className='cta container'>
			<div className='cta__image'>
				<div className='cta__image-shadow'></div>
				<img src={CtaImage} alt='' width='1920' height='500' />
				<div className='cta__content'>
					<div className='cta__lead'>A természetes szépségért</div>
					<div className='cta__desc'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor
					</div>
					<div className='cta__button'>
						<Button hasArrow>Megnézem</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;
