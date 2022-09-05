import styled from '@emotion/styled';

export const Typo = styled.div(
	{
		alignItems: 'center',
		margin: 0,
		letterSpacing: 1,
	},
	(props) => {
		const type = getTypographyStyles(props.theme, props.variant);
		const mobileType = getTypographyStyles(props.theme, props.mobileVariant);
		let objectToReturn = {
			display: props.display,
			...type.desktop,
			color: props.partner
				? props.theme.partner.colors.text[props.color]
				: props.theme.colors.text[props.color],

			[props.theme.breakPoint.mobile]: {
				...type.mobile,
				...(props.mobileVariant ? mobileType.desktop : null),
				color: props.mobileColor
					? props.theme.colors.text[props.mobileColor]
					: props.partner
						? props.theme.partner.colors.text[props.color]
						: props.theme.colors.text[props.color],
				...(props.mobileWeight ? { fontWeight: props.mobileWeight } : null),
			},

			[props.theme.breakPoint.smMobile]: {
				...type.smMobile,
				...(props.mobileVariant ? mobileType.desktop : null),
				color: props.mobileColor
					? props.theme.colors.text[props.mobileColor]
					: props.partner
						? props.theme.partner.colors.text[props.color]
						: props.theme.colors.text[props.color],
				...(props.mobileWeight ? { fontWeight: props.mobileWeight } : null),
			},

			span: {
				marginLeft: props.theme.margin.sm,
				...type.desktop,
				[props.theme.breakPoint.mobile]: {
					...type.mobile,
				},
			},
		};

		if (props.textTransform) {
			objectToReturn.textTransform = props.textTransform;
		}

		if (props.weight) {
			objectToReturn.fontWeight = props.weight;
		}

		if (props.align) {
			objectToReturn.textAlign = props.align;
			if (props.align === 'center') {
				objectToReturn.justifyContent = 'center';
			}
		}

		if (props.pulse) {
			objectToReturn.color = props.pulseProfit
				? props.theme.colors.text.green
				: props.theme.colors.text.red;

			objectToReturn[props.theme.breakPoint.mobile].color = props.pulseProfit
				? props.theme.colors.text.green
				: props.theme.colors.text.red;
		}

		return objectToReturn;
	}
);

export const getTypographyStyles = (theme, variant) => {
	switch (variant) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
		case 'body':
		case 'caption':
		case 'captionSmall':
			return theme.typography[variant];
		default:
			return theme.typography.body;
	}
};
