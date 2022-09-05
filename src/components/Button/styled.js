import styled from '@emotion/styled';

export const Wrapper = styled.div({}, (props) => {
	const typeColor = getButtonTypeColor(props);
	const sizes = getButtonSizes(props.size);
	const mobileSize = getButtonSizes(props.mobileSize);
	return {
		width: props.size === 'block' ? '100%' : 'auto',
		textAlign: props.align,
		['.button']: {
			cursor: 'pointer',
			borderRadius: '25px',
			background: typeColor.default,
			color: typeColor.color,
			alignItems: 'center',
			justifyContent: 'center',
			fontStyle: 'normal',
			fontWeight: 600,
			textTransform: 'uppercase',
			border: `2px solid ${typeColor.color}`,
			transition: 'all 0.4s ease',
			...sizes,
			...(props.textTransform ? { textTransform: props.textTransform } : null),
			...(props.height ? { height: props.height } : null),
			...(props.width ? { minWidth: 'unset', width: props.width } : null),
			...(props.color ? { color: props.theme.colors.text[props.color] } : null),
			[props.theme.breakPoint.mobile]: {
				...(props.mobileSize ? mobileSize : null),
				...(props.mobileHeight ? { height: props.mobileHeight } : null),
				...(props.mobileWidth ? { width: props.mobileWidth } : null),
				...(props.mobileFontSize ? { fontSize: props.mobileFontSize } : null),
			},
			['&:hover']: {
				color: typeColor.default,
				background: typeColor.color,
				borderColor: typeColor.default,
				outline: 'none',
			},
			['&:focus']: {
				outline: 'none',
			},
			['&:active']: {
				background: typeColor.pressed,
				outline: 'none',
			}
		},
	};
});

const getButtonTypeColor = (props) => {
	return props.partner
		? props.theme.partner.buttons[props.variant]
		: props.theme.buttons[props.variant];
};

const getButtonSizes = (size) => {
	switch (size) {
		case 'xl':
			return {
				minWidth: '380px',
				height: '84px',
				fontSize: '22px',
			};
		case 'sm':
			return {
				minWidth: '140px',
				height: '42px',
				fontSize: '16px',
			};
		case 'xs':
			return {
				minWidth: 'auto',
				height: 'auto',
				fontSize: '16px',
				padding: '8px 25px'
			};
		case 'block':
			return {
				width: '100%',
				height: '48px',
				fontSize: '16px',
			};
		default:
			return {
				minWidth: '200px',
				height: 'auto',
				fontSize: '16px',
				padding: '9px 16px'
			};
	}
};
