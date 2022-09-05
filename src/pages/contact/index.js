import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import axios from 'axios';
import store from '../../store';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Popup from '../../components/Popup';
import {
	ButtonContainer,
	ContactDetails,
	ContactForm,
	ContactInfo,
	Container,
	Flex,
	FormHeading,
	HeadingText,
	InfoFlex,
	InfoLabel,
	InfoText,
	Input,
	InputError,
	InputField,
	Label,
	MapContainer,
	Row,
	Textarea,
	TextIcon,
	Wrapper
} from './styled';
import { omit } from 'lodash';

const Contact = () => {
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		mobile_no: '',
		email: '',
		message: ''
	});
	const [errors, setErrors] = useState({});
	let emailpattern = `[a-z0-9]+@[a-z]+\\.[a-z]${2, 3}`;

	const validate = (e, name, value) => {
		switch (name) {
			case 'first_name':
				if (value.length < 2) {
					setErrors({
						...errors,
						first_name: 'Please enter firstname'
					});
				}
				else {
					let newObj = omit(errors, 'first_name');
					setErrors(newObj);
				}
				break;
			case 'last_name':
				if (value.length < 2) {
					setErrors({
						...errors,
						last_name: 'Please enter lastname'
					});
				}
				else {
					let newObj = omit(errors, 'last_name');
					setErrors(newObj);
				}
				break;
			case 'email':
				if (value.length < 2) {
					setErrors({
						...errors,
						email: 'Enter an email address'
					});
				}
				else if (value.match(emailpattern)) {
					setErrors({
						...errors,
						email: 'Please enter valid email address'
					});
				}
				else {
					let newObj = omit(errors, 'email');
					setErrors(newObj);
				}
				break;
			case 'mobile_no':
				if (value.length < 10) {
					setErrors({
						...errors,
						mobile_no: 'Enter your 10 Digit Mobile Number'
					});
				}
				else if (value.length > 10) {
					setErrors({
						...errors,
						mobile_no: 'Enter Max 10 Digit Mobile Number'
					});
				}
				else {
					let newObj = omit(errors, 'mobile_no');
					setErrors(newObj);
				}
				break;
			default:
				break;
		}
	};

	const handleChange = (e) => {
		let name = e.target.name;
		let val = e.target.value;
		validate(e, name, val);
		setValues({
			...values,
			[name]: val,
		});
	};

	useEffect(() => {
		document.title = 'EnergyClue | Contact';
	}, []);

	const submitPage = (e) => {
		e.preventDefault();

		axios.post(`${store}/contact/`, {
			first_name: values.first_name,
			last_name: values.last_name,
			mobile_no: values.mobile_no,
			email: values.email,
			message: values.message
		})
			.then((response) => {
				response;
				setOpen(!open);
				setValues({
					first_name: '',
					last_name: '',
					mobile_no: '',
					email: '',
					message: 'No Message'
				});
			});
	};
	return (
		<Wrapper>
			<Container>
				<FormHeading>{t('CONTACTPAGE.HEADING')}</FormHeading>
				<ContactForm onSubmit={submitPage}>
					<Flex>
						<InputError>
							<InputField>
								<Label htmlFor='first_name'>{t('CONTACTPAGE.LABEL.FIRSTNAME')}</Label>
								<Input placeholder={t('CONTACTPAGE.PLACEHOLDER.FIRSTNAME')} value={values.first_name} name="first_name" onChange={handleChange} onBlur={handleChange} required />
							</InputField>
							{errors.first_name && <p>{errors.first_name}</p>}
						</InputError>
						<InputError>
							<InputField>
								<Label htmlFor='last_name'>{t('CONTACTPAGE.LABEL.LASTNAME')}</Label>
								<Input placeholder={t('CONTACTPAGE.PLACEHOLDER.LASTNAME')} value={values.last_name} name="last_name" onChange={handleChange} onBlur={handleChange} required />
								{errors.last_name && <p>{errors.last_name}</p>}
							</InputField>
						</InputError>
					</Flex>
					<Flex>
						<InputError>
							<InputField>
								<Label htmlFor='email'>{t('CONTACTPAGE.LABEL.EMAIL')}</Label>
								<Input placeholder={t('CONTACTPAGE.PLACEHOLDER.EMAIL')} value={values.email} name="email" type={'email'} onChange={handleChange} onBlur={handleChange} required />
								{errors.email && <p>{errors.email}</p>}
							</InputField>
						</InputError>
						<InputError>
							<InputField>
								<Label htmlFor='mobile_no'>{t('CONTACTPAGE.LABEL.CONTACT1')}</Label>
								<Input placeholder={t('CONTACTPAGE.PLACEHOLDER.CONTACT1')} type={'number'} value={values.mobile_no} name="mobile_no" onChange={handleChange} onBlur={handleChange} required />
								{errors.mobile_no && <p>{errors.mobile_no}</p>}
							</InputField>
						</InputError>
					</Flex>
					<InputField className='textarea-container'>
						<Label htmlFor='message'>{t('CONTACTPAGE.LABEL.MESSAGE')}</Label>
						<Textarea placeholder={t('CONTACTPAGE.PLACEHOLDER.MESSAGE')} rows={5} value={values.message} name="message" onChange={handleChange} onBlur={handleChange} />
						{errors.message && <p>{errors.message}</p>}
					</InputField>
					<ButtonContainer>
						<Button
							align="center"
							type={'submit'}
							disabled={Object.keys(errors).length > 0 ? true : false}
						>{t('BUTTON.CONTACT')}</Button>
					</ButtonContainer>
				</ContactForm>
			</Container>
			<Container>
				<Row>
					<MapContainer>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.4695981006926!2d72.53260161481414!3d23.69491878461669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4f9b0acfa2c9%3A0x1b6c4f0109d99333!2sRaja%20complex!5e0!3m2!1sen!2sin!4v1657871944384!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</MapContainer>
					<ContactInfo>
						<ContactDetails>
							<HeadingText>
								<Typography
									variant="h3"
									color="black"
								>
                                Address
								</Typography>
							</HeadingText>
							<InfoFlex>
								<InfoLabel>Location :&nbsp;</InfoLabel>
								<TextIcon>
									<InfoText>2-B Raja Complex, Opp. Dharoi Colony Road, Visnagar, Meshana, Gujarat. 384315</InfoText>
								</TextIcon>
							</InfoFlex>
							<HeadingText className='contact'>
								<Typography
									variant="h3"
									color="black"
								>
                                Contact
								</Typography>
							</HeadingText>
							<InfoFlex>
								<InfoLabel>Call us :&nbsp;</InfoLabel>
								<TextIcon>
									<InfoText>
										<a href='tel: 6359798991'>+91 635 97 98 99 1</a>
									</InfoText>
								</TextIcon>
							</InfoFlex>
							<InfoFlex>
								<InfoLabel>Email :&nbsp;</InfoLabel>
								<TextIcon>
									<InfoText>
										<a href='mailto: energyclue123@gmail.com'>energyclue123@gmail.com</a>
									</InfoText>
								</TextIcon>
							</InfoFlex>
						</ContactDetails>
					</ContactInfo>
				</Row>
			</Container>
			<Popup open={open} setOpen={setOpen} />
		</Wrapper>
	);
};

export default Contact;