import React from 'react';
import { any, bool, oneOf, string } from 'prop-types';
import theme from '../../themes/base.json';
import { Typo } from './styled.js';

const { colors, typography } = theme;
const Typography = ({ children, testId, ...rest }) => {
	return (
		<Typo {...rest} data-testid={testId}>
			{children}
		</Typo>
	);
};

Typography.propTypes = {
	children: any,
	variant: oneOf(Object.keys(typography)),
	mobileVariant: oneOf(Object.keys(typography)),
	color: oneOf(Object.keys(colors.text)),
	mobileColor: oneOf(Object.keys(colors.text)),
	weight: oneOf([
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'normal',
	]),
	mobileWeight: oneOf([
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'normal',
	]),
	display: string,
	partner: bool,
	pulseProfit: bool,
	pulse: bool,
	testId: string,
	textTransform: string,
};

Typography.defaultProps = {
	variant: 'body',
	display: 'flex',
};

export default Typography;
