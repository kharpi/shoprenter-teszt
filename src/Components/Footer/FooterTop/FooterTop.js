import './FooterTop.css';
import { ReactComponent as FacebookIcon } from '../../../Assets/Icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../../Assets/Icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../../Assets/Icons/youtube.svg';
import { ReactComponent as MessengerIcon } from '../../../Assets/Icons/messenger.svg';
import { ReactComponent as TwitterIcon } from '../../../Assets/Icons/twitter.svg';

const FooterTop = () => {
	return (
		<div className='footer__top'>
			<ul className='footer__menu'>
				<li className='footer__item'>
					<a href='/'>Kapcsolat</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Akciós termékek</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Adatvédelmi nyilatkozat</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Vásárlási feltételek</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Fizetés, szállítás</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Adatvédelem</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Segítség</a>
				</li>
				<li className='footer__item'>
					<a href='/'>Rólunk</a>
				</li>
			</ul>
			<ul className='footer__menu footer-menu--bottom'>
				<li className='footer__item footer__item--alt'>
					4028 Debrecen, Kassai út 129
				</li>
				<li className='footer__item'>
					<a href='mailto:info@shoprenter.hu'>info@shoprenter.hu</a>
				</li>
				<li className='footer__item footer__item--alt'>
					<a href='tel:003612345012'>+36-1/234-5012</a>
				</li>
				<li className='footer__item footer__item--alt'>
					Nyitvatartás: h-p 9-17
				</li>
			</ul>
			<ul className='footer__socials'>
				<li className='footer__social-item'>
					<a href='/'>
						<FacebookIcon />
					</a>
				</li>
				<li className='footer__social-item'>
					<a href='/'>
						<InstagramIcon />
					</a>
				</li>
				<li className='footer__social-item'>
					<a href='/'>
						<YoutubeIcon />
					</a>
				</li>
				<li className='footer__social-item'>
					<a href='/'>
						<MessengerIcon />
					</a>
				</li>
				<li className='footer__social-item'>
					<a href='/'>
						<TwitterIcon />
					</a>
				</li>
			</ul>
			<div className='footer__copyright'>&copy; 2021 Teszts téma</div>
			<div className='footer__lang-and-currency'>
				<ul className='footer__lang-switcher'>
					<li className='footer__lang-item active'>HU</li>
					<li className='footer__lang-item'>EN</li>
				</ul>
				<select name='fcc' className='footer__currency-switcher'>
					<option value='huf'>Huf</option>
				</select>
			</div>
			<div className='footer__long-text container-smaller'>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
				quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
				eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
				voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
				corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
				Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
				quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
				voluptas nulla pariatur?
			</div>
		</div>
	);
};

export default FooterTop;
