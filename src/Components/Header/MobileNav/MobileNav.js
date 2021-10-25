import { ReactComponent as BagIcon } from '../../../Assets/Icons/bag-icon.svg';
import { ReactComponent as HeartIcon } from '../../../Assets/Icons/heart-icon.svg';
import { ReactComponent as UserIcon } from '../../../Assets/Icons/user-icon.svg';
import { ReactComponent as SearchIcon } from '../../../Assets/Icons/search-icon.svg';

import './MobileNav.css';
import Dropdown from '../../UI/Dropdown/Dropdown';

const MobileNav = ({
	dropdownList,
	dropdownCustomClasses,
	searchActive,
	setSearchActive,
	mobileNavActive,
	setMobileNavActive,
}) => {
	return (
		<div className='nav__mobile-wrapper'>
			<div className='nav__mobile-sticky'>
				<div
					className={`nav__hamburger ${
						mobileNavActive ? 'nav__hamburger--active' : ''
					}`}
					onClick={() =>
						setMobileNavActive((mobileNavActive) => !mobileNavActive)
					}
				>
					<div className='nav__hamburger-line'></div>
					<div className='nav__hamburger-line'></div>
					<div className='nav__hamburger-line'></div>
				</div>
				<h1 className='nav__mobile-logo'>
					<a href='/'>
						<span>Teszt</span>téma
					</a>
				</h1>
				<div className='nav__mobile-icons'>
					<div className='nav__icon'>
						<UserIcon />
					</div>
					<div className='nav__icon'>
						<HeartIcon />
					</div>
					<div className='nav__icon'>
						<BagIcon />
					</div>
				</div>
			</div>
			<div
				className={`nav__mobile ${
					mobileNavActive ? 'nav__mobile--active' : ''
				}`}
			>
				<div className='nav__mobile-top'>
					<div className='nav__contact'>
						<a href='tel:0987654321'>09 87 654 321</a>
					</div>
					<div className='nav__text'>
						<a href='.'>Kapcsolat</a>
					</div>
					<div className='nav__text'>
						<a href='.'>Rólunk</a>
					</div>
					<Dropdown
						title='Fizetés, szállítás'
						items={dropdownList}
						classes={dropdownCustomClasses}
					/>
				</div>
				<div className='nav__mobile-search'>
					<input
						className='nav__mobile-input'
						type='text'
						placeholder='keresés...'
						onFocus={() => setSearchActive(1)}
						onBlur={() => setSearchActive(0)}
					/>
					<div className={`nav__search-icon ${searchActive ? 'colored' : ''}`}>
						<SearchIcon />
					</div>
				</div>
				<ul className='nav__mobile-items'>
					<li className='nav__item'>Arcápolás</li>
					<li className='nav__item'>Testápolás</li>
					<li className='nav__item'>Hajápolás</li>
					<li className='nav__item'>Smink</li>
					<li className='nav__item'>Bőrtípusok</li>
					<li className='nav__item'>Újdonságok</li>
					<li className='nav__item'>Férfiaknak</li>
					<li className='nav__item'>Baba-Mama</li>
					<li className='nav__item'>Ajándék ötletek</li>
					<li className='nav__item'>Márkák</li>
					<li className='nav__item'>Akció</li>
					<li className='nav__item nav__item--xs'>Kapcsolat</li>
					<li className='nav__item nav__item--xs'>Rólunk</li>
					<li className='nav__item nav__item--xs'>Fizetés és szállítás</li>
					<li className='nav__item nav__item--xs nav__item--sub'>
						Lorem ipsum
					</li>
					<li className='nav__item nav__item--xs nav__item--sub'>
						Lorem ipsum dolor sit amet
					</li>
					<li className='nav__item nav__item--xs nav__item--sub'>
						Lorem ipsum
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileNav;
