import './Slider.css';
import Slider1 from '../../../Assets/Slider/1.jpg';
import MobileSlider1 from '../../../Assets/Slider/Mobile/1.jpg';
import SlickSlider from 'react-slick';
import Button from '../../UI/Button/Button';
import useIsMobile from '../../../Utils/useIsMobile';
import { useEffect, useState } from 'react';

const Slider = () => {
	const [images, setImages] = useState([Slider1, Slider1, Slider1]);
	const windowSize = useIsMobile();

	useEffect(() => {
		if (windowSize) setImages([MobileSlider1, MobileSlider1, MobileSlider1]);
		else setImages([Slider1, Slider1, Slider1]);
	}, [windowSize]);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};

	return (
		<section className='slider'>
			<SlickSlider {...settings}>
				{images.map((image, idx) => (
					<div className='slider__item' key={`slider-${idx}`}>
						<img src={image} alt='' width='1920' height='400' />
						<div className='slider__content container'>
							<div className='slider__lead'>Lorem</div>
							<div className='slider__desc'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt.
							</div>
							<div className='slider__button'>
								<Button hasArrow>Részletek</Button>
							</div>
						</div>
					</div>
				))}
			</SlickSlider>
		</section>
	);
};

export default Slider;
