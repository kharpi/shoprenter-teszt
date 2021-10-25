import './FooterBottom.css';
import GLS from '../../../Assets/Footer/gls.png';
import DPD from '../../../Assets/Footer/dpd.png';
import Paypal from '../../../Assets/Footer/paypal.png';
import Mastercard from '../../../Assets/Footer/mastercard.png';
import Maestro from '../../../Assets/Footer/maestro.png';
import Proud from '../../../Assets/Footer/proud.png';
import Arukereso from '../../../Assets/Footer/arukereso.png';

const FooterBottom = () => {
	const images = [GLS, DPD, Paypal, Mastercard, Maestro, Proud, Arukereso];
	return (
		<div className='footer__bottom'>
			{images.map((image, idx) => (
				<img
					src={image}
					alt=''
					width='120px'
					height='25px'
					key={`footer__bottom-${idx}`}
				/>
			))}
		</div>
	);
};

export default FooterBottom;
