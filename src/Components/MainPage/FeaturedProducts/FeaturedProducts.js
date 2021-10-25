import Button from '../../UI/Button/Button';
import Price from '../../UI/Price/Price';
import Rating from '../../UI/Rating/Rating';

import F1 from '../../../Assets/Featured/featured-1.jpg';
import F2 from '../../../Assets/Featured/featured-2.jpg';
import F3 from '../../../Assets/Featured/featured-3.jpg';
import F4 from '../../../Assets/Featured/featured-4.jpg';
import { ReactComponent as HeartIcon } from '../../../Assets/Icons/heart-icon.svg';

import './FeaturedProducts.css';

import SlickSlider from 'react-slick';

const FeaturedProducts = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const featuredProducts = [
		{
			src: F1,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.',
			rating: {
				count: 12,
				stars: 4,
			},
			price: {
				normal: '12 300 Ft',
				discounted: '10 900 Ft',
			},
		},
		{
			src: F2,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.',
			rating: {
				count: 12,
				stars: 4,
			},
			price: {
				normal: '12 300 Ft',
				discounted: '10 900 Ft',
			},
		},
		{
			src: F3,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.',
			rating: {
				count: 12,
				stars: 4,
			},
			price: {
				normal: '12 300 Ft',
				discounted: '10 900 Ft',
			},
		},
		{
			src: F4,
			title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua incididunt ut.',
			rating: {
				count: 12,
				stars: 4,
			},
			price: {
				normal: '12 300 Ft',
				discounted: '10 900 Ft',
			},
		},
	];

	return (
		<section className='featured-products container'>
			<div className='featured-products__lead'>Akciós termékek</div>
			<div className='featured-products__items-wrapper'>
				<SlickSlider {...settings}>
					{featuredProducts.map((product, idx) => (
						<div
							className='featured-products__item'
							key={`featured-products-${idx}`}
						>
							<div className='featured-products__add-to-fav'>
								<HeartIcon />
							</div>
							<div className='featured-products__image'>
								<img src={product.src} alt='' width='450' height='450' />
							</div>
							<div className='featured-products__title'>
								<a href='/' className='primary'>
									{product.title}
								</a>
							</div>
							<div className='featured-products__desc'>{product.desc}</div>
							<div className='featured-products__rating'>
								<Rating
									stars={product.rating.stars}
									count={product.rating.count}
								/>
							</div>
							<div className='featured-products__price'>
								<Price
									normal={product.price.normal}
									discounted={product.price.discounted}
								/>
							</div>
							<div className='featured-products__button'>
								<Button>Kosárba</Button>
							</div>
						</div>
					))}
				</SlickSlider>
			</div>
			<div className='featured-products__more'>
				<Button hasArrow alt>
					Összes akciós termék
				</Button>
			</div>
		</section>
	);
};

export default FeaturedProducts;
