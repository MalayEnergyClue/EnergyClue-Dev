import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	FaFacebookF,
	FaInstagram,
	FaWhatsapp
} from 'react-icons/fa';
import Typography from '../Typography';
import {
	Container,
	FooterLogo,
	FooterSocialLink,
	SocialButton,
	Wrapper
} from './styled';
import { LogoImg } from '../../images';

const Footer = () => {
	return (
		<Wrapper>
			<Container className='footer-container'>
				<FooterLogo>
					<NavLink to={'/'}><img src={LogoImg} /></NavLink>
				</FooterLogo>
				<Typography
					variant="caption"
					color="light"
					display="block"
					weight="400"
					className="copy-text"
				>
					&copy; All rights are reserved
				</Typography>
				<FooterSocialLink>
					<SocialButton>
						<a href={'https://www.facebook.com/EnergyClue/?ti=as'} target="_blank" rel="noreferrer">
							<FaFacebookF />
						</a>
					</SocialButton>
					<SocialButton>
						<a href='https://instagram.com/energy_clue?igshid=YmMyMTA2M2Y=' target="_blank" rel="noreferrer">
							<FaInstagram />
						</a>
					</SocialButton>
					<SocialButton>
						<a href='https://api.whatsapp.com/send?phone=916359798991' target="_blank" rel="noreferrer">
							<FaWhatsapp />
						</a>
					</SocialButton>
				</FooterSocialLink>
			</Container>
		</Wrapper>
	);
};

export default Footer;