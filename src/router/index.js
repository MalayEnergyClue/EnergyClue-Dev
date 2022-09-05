import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/home';
import Service from '../pages/service';
import Contact from '../pages/contact';
import GetQuotes from '../pages/getquotes';
import FAQPage from '../pages/faq_page';

const RouterContainer = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout><Home /></Layout>} />
				<Route path='/services' element={<Layout><Service /></Layout>} />
				<Route path='/faqs' element={<Layout><FAQPage /></Layout>} />
				<Route path='/contact' element={<Layout><Contact /></Layout>} />
				<Route path='/get-quotes' element={<Layout><GetQuotes /></Layout>} />
				<Route path='*' element={<Layout><Home /></Layout>} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterContainer;