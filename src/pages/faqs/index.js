import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { t } from 'i18next';
import store from '../../store';
import Typography from '../../components/Typography';
import Accordion from './Accordian';
import { Container, Wrapper } from './styled';

const FAQ = () => {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		axios.get(`${store}/faq/`)
			.then((response) => {
				setApiData(response.data.data);
			});
	}, []);
	useEffect(() => {
		document.title = 'EnergyClue | FAQs';
	}, []);
	return (
		<Wrapper>
			<Container>
				<Typography
					variant="h1"
					color="black"
					align="center"
					className="underline"
				>
					{t('FAQPAGE.HEADING')}
				</Typography>
				{apiData.map((item, index) => (
					<Accordion
						index={index}
						title={item.question}
						content={item.answer}
						key={index}
					/>
				))}
			</Container>
		</Wrapper>
	);
};

export default FAQ;