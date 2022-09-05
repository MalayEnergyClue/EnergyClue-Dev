import React from 'react';
import { Global } from '@emotion/react';
import { GlobalStyle } from './global';

const GlobalStyles = () => {
	return (
		<Global styles={GlobalStyle} />
	);
};

export default GlobalStyles;