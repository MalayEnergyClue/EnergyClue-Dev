import React from 'react';
import { any, bool, func, oneOf, string } from 'prop-types';
import theme from '../../themes/base.json';
import { Wrapper } from './styled.js';

const { buttons } = theme;
const Button = ({
	children,
	disabled,
	type,
	onClick,
	...rest
}) => {
	return (
		<Wrapper {...rest}>
			<button
				className='button'
				disabled={disabled}
				type={type}
				onClick={onClick}
			>
				{children}
			</button>
		</Wrapper>
	);
};

Button.propTypes = {
	children: any,
	disabled: bool,
	variant: oneOf(Object.keys(buttons)),
	size: oneOf(['xl', 'sm', 'xs', 'default', 'block']),
	mobileSize: oneOf(['xl', 'sm', 'xs', 'default', 'block']),
	type: oneOf(['button', 'submit']),
	onClick: func,
	height: string,
	mobileHeight: string,
	color: string,
	textTransform: string
};

Button.defaultProps = {
	type: 'button',
	variant: 'primary',
	block: false,
};

export default Button;