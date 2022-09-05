import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Content, LayoutContainer } from './styled';


const Layout = ({ children }) => {
	const [style, setStyle] = useState(false);
	const [toggle, setToggle] = useState(false);
	const scrollChange = () => {
		if (document.querySelector('.content').scrollTop > 0) {
			setStyle(true);
		}
		else {
			setStyle(false);
		}
	};
	const loadPage = () => {
		if (!(window.location.pathname === '/')) {
			document.querySelector('.content').scrollTop = 0;
		}
	};
	return (
		<LayoutContainer className='content' onScroll={scrollChange} onLoad={loadPage} active={style} hamburgerOn={toggle}>
			<Header styleChange={style} toggle={toggle} setToggle={setToggle} />
			<Content>
				{children}
			</Content>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;