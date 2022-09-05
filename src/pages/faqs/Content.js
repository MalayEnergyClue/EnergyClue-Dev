import { t } from 'i18next';
import React from 'react';
import Typography from '../../components/Typography';

export const accordionData = [
	{
		title: <Typography
			variant="h4"
			color="black"
			className="heading"
		>
			{t('FAQPAGE.FAQs.FAQ1.HEADING')}
		</Typography>,
		content: <Typography
			variant="body"
			color="black"
		>
			{t('FAQPAGE.FAQs.FAQ1.PARA')}
		</Typography>
	},
	{
		title: <Typography
			variant="h4"
			color="black"
			className="heading"
		>
			{t('FAQPAGE.FAQs.FAQ2.HEADING')}
		</Typography>,
		content: <Typography
			variant="body"
			color="black"
		>
			{t('FAQPAGE.FAQs.FAQ2.PARA')}
		</Typography>
	},
	{
		title: <Typography
			variant="h4"
			color="black"
			className="heading"
		>
			{t('FAQPAGE.FAQs.FAQ3.HEADING')}
		</Typography>,
		content: <Typography
			variant="body"
			color="black"
		>
			{t('FAQPAGE.FAQs.FAQ3.PARA')}
		</Typography>
	}
];