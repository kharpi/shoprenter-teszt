import Dropdown from '../../UI/Dropdown/Dropdown';
import { ReactComponent as BagIcon } from '../../../Assets/Icons/bag-icon.svg';
import { ReactComponent as HeartIcon } from '../../../Assets/Icons/heart-icon.svg';
import { ReactComponent as UserIcon } from '../../../Assets/Icons/user-icon.svg';
import { ReactComponent as SearchIcon } from '../../../Assets/Icons/search-icon.svg';

import './Nav.css';

const Nav = ({
	dropdownList,
	dropdownCustomClasses,
	searchActive,
	setSearchActive,
}) => {
	return (
		<header>
			<div className='header__top-row'>
				<div className='header__left-col'>
					<div className='header__contact'>
						<a href='tel:0987654321'>09 87 654 321</a>
					</div>
					<div className='header__text'>
						<a href='.'>Kapcsolat</a>
					</div>
					<div className='header__text'>
						<a href='.'>Rólunk</a>
					</div>
					<Dropdown
						title='Fizetés, szállítás'
						items={dropdownList}
						classes={dropdownCustomClasses}
					/>
				</div>
				<div className='header__middle-col'>
					<h1 className='header__logo'>
						<a href='/'>
							<span>Teszt</span>téma
						</a>
					</h1>
				</div>
				<div className='header__right-col'>
					<div className='header__input-wrapper'>
						<input
							className='header__input'
							type='text'
							placeholder='keresés...'
							onFocus={() => setSearchActive(1)}
							onBlur={() => setSearchActive(0)}
						/>
						<div
							className={`header__search-icon ${searchActive ? 'colored' : ''}`}
						>
							<SearchIcon />
						</div>
					</div>
					<div className='header__icon'>
						<UserIcon />
					</div>
					<div className='header__icon'>
						<HeartIcon />
					</div>
					<div className='header__icon'>
						<BagIcon />
					</div>
				</div>
			</div>
			<nav>
				<ul className='nav__wrapper'>
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
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
