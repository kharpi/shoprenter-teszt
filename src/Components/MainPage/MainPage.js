import Slider from './Slider/Slider';
import Header from '../Header/Header';
import HighlightedRow from './HighlightedRow/HighlightedRow';
import GridSection from './GridSection/GridSection';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import CTA from './CTA/CTA';
import Footer from '../Footer/Footer';

const MainPage = () => {
	return (
		<>
			<Header />
			<main>
				<HighlightedRow />
				<Slider />
				<GridSection />
				<FeaturedProducts />
				<CTA />
			</main>
			<Footer />
		</>
	);
};

export default MainPage;
