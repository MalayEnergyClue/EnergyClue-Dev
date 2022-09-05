import React, { useState } from 'react';
import { Content, FAQHeading, Flex, Icon, IconContainer, Summary, TextContent } from './styled';

const Accordion = ({ title, content, index }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<Content>
			<Flex onClick={() => setIsActive(!isActive)}>
				<FAQHeading>{index + 1})&nbsp;{title}</FAQHeading>
				<IconContainer>
					<Icon active={isActive} />
				</IconContainer>
			</Flex>
			{isActive && <TextContent>
				<Summary>{content}</Summary>
			</TextContent>}
		</Content>
	);
};

export default Accordion;