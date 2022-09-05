import React from 'react';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Button from '../Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { LogoImg } from '../../images';
import {
	GetQuote,
	ListItem,
	Logo,
	MenuIcon,
	Nav,
	NavItems,
	Wrapper
} from './styled';

const Header = ({ styleChange, toggle, setToggle }) => {
	let navigate = useNavigate();
	function handleClick() {
		navigate('/get-quotes');
	}
	return (
		<Wrapper active={styleChange}>
			<Nav>
				<Logo><NavLink to={'/'}><img src={LogoImg} /></NavLink></Logo>
				<NavItems className='responsive' toggle={toggle}>
					<ListItem><NavLink to={'/'} onClick={() => setToggle(false)}>{t('HEADER.NAVITEMS.ITEM1')}</NavLink></ListItem>
					<ListItem><NavLink to={'/services'} onClick={() => setToggle(false)}>{t('HEADER.NAVITEMS.ITEM2')}</NavLink></ListItem>
					<ListItem><NavLink to={'/faqs'} onClick={() => setToggle(false)}>{t('HEADER.NAVITEMS.ITEM5')}</NavLink></ListItem>
					<ListItem><NavLink to={'/contact'} onClick={() => setToggle(false)}>{t('HEADER.NAVITEMS.ITEM3')}</NavLink></ListItem>
				</NavItems>
				<NavItems className='desktop'>
					<ListItem><NavLink to={'/'}>{t('HEADER.NAVITEMS.ITEM1')}</NavLink></ListItem>
					<ListItem><NavLink to={'/services'}>{t('HEADER.NAVITEMS.ITEM2')}</NavLink></ListItem>
					<ListItem><NavLink to={'/faqs'}>{t('HEADER.NAVITEMS.ITEM5')}</NavLink></ListItem>
					<ListItem><NavLink to={'/contact'}>{t('HEADER.NAVITEMS.ITEM3')}</NavLink></ListItem>
				</NavItems>
				<MenuIcon onClick={() => setToggle(!toggle)}>
					{toggle ? <MdClose /> : <GiHamburgerMenu />}
				</MenuIcon>
				<GetQuote>
					<Button
						variant="primary"
						size="xs"
						textTransform="capitalize"
						onClick={handleClick}
					>{t('BUTTON.GETQUOTE')}</Button>
				</GetQuote>
			</Nav>
		</Wrapper>
	);
};

export default Header;