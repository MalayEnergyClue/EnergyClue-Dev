import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import axios from 'axios';
import { omit } from 'lodash';
import store from '../../store';
import Popup from '../../components/Popup';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import {
	ButtonContainer,
	Container,
	Flex,
	Form,
	Input,
	InputError,
	InputField,
	Label,
	Option,
	Select,
	SelectField,
	Wrapper
} from './styled';

const GetQuotes = () => {
	const [open, setOpen] = useState(false);
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		name: '',
		mobile_no: '',
		email: '',
		address: '',
		date: new Date().toLocaleDateString('en-CA'),
		frequency: '9AM to 12PM'
	});
	let emailpattern = `[a-z0-9]+@[a-z]+\\.[a-z]${2, 3}`;

	const submitPage = (e) => {
		e.preventDefault();
		axios.post(`${store}/get-quote/`, {
			name: values.name,
			mobile_no: values.mobile_no,
			email: values.email,
			address: values.address,
			date: values.date,
			frequency: values.frequency
		})
			.then((response) => {
				response;
				setOpen(!open);
				setValues({
					name: '',
					mobile_no: '',
					email: '',
					address: '',
					date: new Date().toLocaleDateString('en-CA'),
					frequency: '9AM to 12PM'
				});
			});
	};
	const validate = (e, name, value) => {
		switch (name) {
			case 'name':
				if (value.length < 2) {
					setErrors({
						...errors,
						name: 'Please enter your name'
					});
				}
				else {
					let newObj = omit(errors, 'name');
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
			case 'address':
				if (value.length < 2) {
					setErrors({
						...errors,
						address: 'Please Enter your Address'
					});
				}
				else {
					let newObj = omit(errors, 'address');
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
		document.title = 'EnergyClue | Get Quotes';
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
					{t('GETQUOTE.HEADING')}
				</Typography>
				<Form onSubmit={submitPage}>
					<Flex>
						<InputError>
							<InputField>
								<Label htmlFor='name'>{t('GETQUOTE.LABEL.FIRSTNAME')}</Label>
								<Input placeholder={t('GETQUOTE.PLACEHOLDER.FIRSTNAME')} value={values.name} name="name" type={'text'} onChange={handleChange} onBlur={handleChange} required />
							</InputField>
							{errors.name && <p>{errors.name}</p>}
						</InputError>
						<InputError>
							<InputField>
								<Label htmlFor='mobile_no'>{t('GETQUOTE.LABEL.CONTACTNO')}</Label>
								<Input placeholder={t('GETQUOTE.PLACEHOLDER.CONTACTNO')} value={values.mobile_no} name="mobile_no" type={'number'} onChange={handleChange} onBlur={handleChange} required />
								{errors.mobile_no && <p>{errors.mobile_no}</p>}
							</InputField>
						</InputError>
					</Flex>
					<Flex>
						<InputError>
							<InputField>
								<Label htmlFor='email'>{t('GETQUOTE.LABEL.EMAIL')}</Label>
								<Input placeholder={t('GETQUOTE.PLACEHOLDER.EMAIL')} value={values.email} name="email" type={'email'} onChange={handleChange} onBlur={handleChange} required />
								{errors.email && <p>{errors.email}</p>}
							</InputField>
						</InputError>
						<InputError>
							<InputField>
								<Label htmlFor='address'>{t('GETQUOTE.LABEL.ADDRESS')}</Label>
								<Input placeholder={t('GETQUOTE.PLACEHOLDER.ADDRESS')} value={values.address} name="address" type={'text'} onChange={handleChange} onBlur={handleChange} required />
								{errors.address && <p>{errors.address}</p>}
							</InputField>
						</InputError>
					</Flex>
					<Flex>
						<InputError>
							<InputField>
								<Label htmlFor='date'>{t('GETQUOTE.LABEL.DATE')}</Label>
								<Input placeholder={t('GETQUOTE.PLACEHOLDER.DATE')} type={'date'} defaultValue={new Date().toLocaleDateString('en-CA')} name="date" onChange={handleChange} onBlur={handleChange} />
							</InputField>
						</InputError>
						<SelectField className='w-50'>
							<Label htmlFor='frequency'>{t('GETQUOTE.LABEL.FREQUENCY')}</Label>
							<Select placeholder={t('GETQUOTE.PLACEHOLDER.FREQUENCY')} value={values.frequency} name="frequency" onChange={handleChange} onBlur={handleChange}>
								<Option>9AM to 12PM</Option>
								<Option>12PM to 3PM</Option>
								<Option>3PM to 6PM</Option>
							</Select>
						</SelectField>
					</Flex>
					<ButtonContainer>
						<Button
							align="center"
							type={'submit'}
							disabled={Object.keys(errors).length > 0 ? true : false}
						>{t('BUTTON.SUBMIT')}</Button>
					</ButtonContainer>
				</Form>
			</Container>
			<Popup open={open} setOpen={setOpen} />
		</Wrapper>
	);
};

export default GetQuotes;