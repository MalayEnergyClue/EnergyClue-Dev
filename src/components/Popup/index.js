import React from 'react';
import Typography from '../Typography';
import { GrClose } from 'react-icons/gr';
import {
	CloseBtn,
	Container,
	Modal,
	TextContainer,
	Wrapper
} from './styled';

const Popup = ({ open, setOpen }) => {
	return (
		open && <Wrapper onClick={() => setOpen(false)}>
			<Container>
				<Modal>
					<CloseBtn><GrClose /></CloseBtn>
					<TextContainer>
						<Typography
							variant="h1"
							color="black"
							align="center"
						>
						Thank You
						</Typography>
						<Typography
							variant="h4"
							color="black"
							align="center"
						>
						Your Message Will be successfully sent!!!
						</Typography>
					</TextContainer>
				</Modal>
			</Container>
		</Wrapper>
	);
};
export default Popup;