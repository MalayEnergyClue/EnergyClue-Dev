import { ThemeProvider } from '@emotion/react';
import React from 'react';
import './languages/i18n';
import RouterContainer from './router';
import base from './themes/base';
import GlobalStyles from './themes/globalStyles';

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<ThemeProvider theme={base}>
				<RouterContainer />
			</ThemeProvider>
		</div>
	);
}

export default App;
