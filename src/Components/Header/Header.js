import { useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import Nav from './Nav/Nav';

const Header = () => {
	const [searchActive, setSearchActive] = useState(0);
	const [mobileNavActive, setMobileNavActive] = useState(0);

	const dropdownList = [
		'Lorem ipsum',
		'Lorem ipsum dolor sit amet',
		'Lorem ipsum',
	];
	const dropdownCustomClasses = ['header__text'];

	return (
		<>
			<Nav
				dropdownCustomClasses={dropdownCustomClasses}
				dropdownList={dropdownList}
				searchActive={searchActive}
				setSearchActive={setSearchActive}
			/>
			<MobileNav
				dropdownCustomClasses={dropdownCustomClasses}
				dropdownList={dropdownList}
				searchActive={searchActive}
				setSearchActive={setSearchActive}
				mobileNavActive={mobileNavActive}
				setMobileNavActive={setMobileNavActive}
			/>
		</>
	);
};

export default Header;
