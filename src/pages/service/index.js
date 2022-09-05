import React, { useEffect, useState, useRef } from 'react';
import { t } from 'i18next';
import axios from 'axios';
import { omit } from 'lodash';
import { addMonths } from '@progress/kendo-date-math';
import store from '../../store';
import Popup from '../../components/Popup';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import pricing from './pricing.json';
import { Assistance, Cleaning, service, Survey } from '../../images';
import {
	Container,
	Content,
	ImgContent,
	InputField,
	InputGroup,
	InputLabel,
	InputLabelContainer,
	Option,
	Row,
	Select,
	SelectGroup,
	SelectLabel,
	SelectLabelContainer,
	ServiceForm,
	Textarea,
	TextareaLabel,
	TextContent,
	Wrapper
} from './styled';


const Service = () => {
	const [open, setOpen] = useState(false);
	const [months, setMonths] = useState('1');
	const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
	const [quoteDate, setQuoteDate] = useState(new Date().toLocaleDateString('en-CA'));
	const [form, setForm] = useState(false);
	const [autoDate, setAutoDate] = useState();
	const [autoPrice, setAutoPrice] = useState(pricing.pricePerKw);
	const [discountedPrice, setDiscountedPrice] = useState('');
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		mobile_no: '',
		address: '',
		start_date: date,
		end_date: autoDate,
		month: '1',
		solarCapacity: pricing.solarCapacity[0],
		pricing: (pricing.pricePerKw * pricing.solarCapacity[0]),
		service_type: 'Free Site Survey',
		message: 'No Message',
		time_period: '3 Days',
		frequency: 'frequency',
		quote_date: quoteDate
	});
	let emailpattern = `[a-z0-9]+@[a-z]+\\.[a-z]${2, 3}`;

	useEffect(() => {
		document.title = 'EnergyClue | Service';
	}, []);

	const changeForm = (e) => {
		if (e.target.value === 'Get a Quote') {
			setForm(true);
		}
		else {
			setForm(false);
		}
	};

	useEffect(() => {
		let newDate = addMonths(new Date(date), Number(months));
		setAutoDate(newDate.toLocaleDateString('en-CA'));
		setAutoPrice(autoPrice);
	}, [months, date, quoteDate]);

	useEffect(() => {
		Object.keys(pricing.discount).map((value, index) => {
			if (value === values.month) {
				const singlePrice = autoPrice * values.solarCapacity * values.month;
				setDiscountedPrice(Math.floor(singlePrice - ((singlePrice * (Object.values(pricing.discount)[index])) / 100)));
			}
			else if (values.month === '1'){
				setDiscountedPrice(Math.floor((autoPrice * values.solarCapacity * values.month)));
			}
		});
	}, [values.month, values.solarCapacity, discountedPrice]);

	const validate = (e, name, value) => {
		switch (name) {
			case 'first_name':
				if (value.length < 2) {
					setErrors({
						...errors,
						first_name: 'Please enter your name'
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
						last_name: 'Please enter last name'
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
			case 'address':
				if (value.length < 2) {
					setErrors({
						...errors,
						address: 'Enter your Address'
					});
				}
				else {
					let newObj = omit(errors, 'address');
					setErrors(newObj);
				}
				break;
			case 'start_date':
				if (value < new Date().toLocaleDateString('en-CA')) {
					setErrors({
						...errors,
						start_date: 'Please select valid date'
					});
				}
				else {
					let newObj = omit(errors, 'start_date');
					setErrors(newObj);
				}
				break;
			default:
				break;
		}
	};

	const submitPage = (e) => {
		if (form) {
			e.preventDefault();
			axios.post(`${store}/service/`, {
				first_name: values.first_name,
				last_name: values.last_name,
				mobile_no: values.mobile_no,
				email: values.email,
				address: values.address,
				service_type: values.service_type,
				message: values.message,
				quote_date: values.quote_date
			})
				.then((response) => {
					response;
					setOpen(!open);
					setForm(false);
					setValues({
						first_name: '',
						last_name: '',
						email: '',
						mobile_no: '',
						address: '',
						service_type: 'Operation & Management',
						message: 'No Message',
						quote_date: quoteDate
					});
				});
		}
		else {
			e.preventDefault();
			axios.post(`${store}/service/`, {
				first_name: values.first_name,
				last_name: values.last_name,
				mobile_no: values.mobile_no,
				email: values.email,
				address: values.address,
				start_date: values.start_date,
				end_date: values.end_date,
				month: values.month,
				solar_capacity: JSON.stringify(values.solarCapacity),
				calculated_price: JSON.stringify(values.pricing),
				time_period: values.time_period,
				service_type: values.service_type,
				message: values.message,
			})
				.then((response) => {
					response;
					setOpen(!open);
					setForm(false);
					setMonths('1');
					setDate(new Date().toLocaleDateString('en-CA'));
					setAutoDate(addMonths(new Date(date), Number(months)).toLocaleDateString('en-CA'));
					setValues({
						first_name: '',
						last_name: '',
						email: '',
						mobile_no: '',
						address: '',
						start_date: date,
						end_date: autoDate,
						month: '1',
						solarCapacity: pricing.solarCapacity[0],
						pricing: (pricing.pricePerKw * pricing.solarCapacity[0]),
						service_type: 'Operation & Management',
						message: 'No Message',
						time_period: '3 Days',
						frequency: 'frequency',
					});
				});
		}
	};

	const handleChange = (e) => {
		let name = e.target.name;
		let val = e.target.value;
		validate(e, name, val);
		setValues({
			...values,
			[name]: val.toString(),
			end_date: autoDate.toString()
		});
	};

	const HandleForm = () => {
		return (
			<div>
				<InputGroup className='flex'>
					<InputLabelContainer className='w-50'>
						<InputLabel htmlFor='start_date'>{t('SERVICEPAGE.FORMLABEL.STARTDATE')} *</InputLabel>
						<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.STARTDATE')} name='start_date' id='start_date' required type={'date'} value={date} onBlur={handleChange} onChange={(e) => setDate(e.target.value)} />
						{errors.start_date && <p>{errors.start_date}</p>}
					</InputLabelContainer>
					<InputLabelContainer className='w-50'>
						<InputLabel htmlFor='end_date'>{t('SERVICEPAGE.FORMLABEL.ENDDATE')}</InputLabel>
						<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.ENDDATE')} name='end_date' value={autoDate} readOnly id='end_date' type={'date'} onChange={handleChange} />
					</InputLabelContainer>
				</InputGroup>
				<SelectGroup className='flex'>
					<SelectLabelContainer className='w-50'>
						<SelectLabel htmlFor='month'>{t('SERVICEPAGE.FORMLABEL.SELECT')} *</SelectLabel>
						<Select id='month' name='month' value={values.month} onChange={(e) => {(setMonths(e.target.value), handleChange(e));}}>
							{pricing.months.map((val, key) => {
								return (
									<Option value={val} key={key}>{val} {val === '1' ? 'Month' : 'Months'}</Option>
								);
							})}
						</Select>
					</SelectLabelContainer>
					<SelectLabelContainer className='w-50'>
						<SelectLabel htmlFor='time_period'>{t('SERVICEPAGE.FORMLABEL.SELECT_DURATION')} *</SelectLabel>
						<Select id='time_period' name='time_period' value={values.time_period} onChange={handleChange}>
							{pricing.frequency.map((val, key) => {
								return (
									<Option value={val} key={key}>{val}</Option>
								);
							})}
						</Select>
					</SelectLabelContainer>
				</SelectGroup>
				<SelectGroup className='flex mt-4'>
					<SelectLabelContainer className='w-50'>
						<SelectLabel htmlFor='solarCapacity'>{t('SERVICEPAGE.FORMLABEL.SELECTSOLARCAPACITY')} *</SelectLabel>
						<Select id='solarCapacity' name='solarCapacity' value={values.solarCapacity} onChange={handleChange}>
							{pricing.solarCapacity.map((val, key) => {
								return (
									<Option value={val} key={key}>{val}</Option>
								);
							})}
						</Select>
					</SelectLabelContainer>
					<InputLabelContainer className='w-50'>
						<InputLabel htmlFor='pricing'>{t('SERVICEPAGE.FORMLABEL.CALCULATEDPRICE')}</InputLabel>
						<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.CALCULATEDPRICE')} name='pricing' value={discountedPrice} readOnly id='pricing' type={'number'} onChange={handleChange} />
					</InputLabelContainer>
				</SelectGroup>
			</div>
		);
	};

	const HandleQuoteForm = () => {
		return (
			<InputGroup className='flex'>
				<InputLabelContainer className='w-50'>
					<InputLabel htmlFor='quote_date'>{t('SERVICEPAGE.FORMLABEL.SELECTDATE')} *</InputLabel>
					<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.SELECTDATE')} name='quote_date' id='quote_date' required type={'date'} value={quoteDate} onChange={(e) => setQuoteDate(e.target.value)} />
					{errors.quote_date && <p>{errors.quote_date}</p>}
				</InputLabelContainer>
			</InputGroup>
		);
	};
	const ref = useRef(null);
	const handleClick = () => {
		ref.current && ref.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<Wrapper>
			<Row className='first' id='survey'>
				<Container className='flex'>
					<Content>
						<ImgContent src={Survey} />
					</Content>
					<Content>
						<TextContent>
							<Typography
								variant="h1"
								color="light"
							>
								{t('SERVICEPAGE.SERVICE1.HEADING')}
							</Typography>
							<Typography
								variant="body"
								color="light"
								weight="300"
							>
								{t('SERVICEPAGE.SERVICE1.PARA')}
							</Typography>
							<Button
								textTransform="capitalize"
								variant="primary"
								display="block"
								type="submit"
								onClick={handleClick}
							>
								{t('BUTTON.BOOKSERVICE')}
							</Button>
						</TextContent>
					</Content>
				</Container>
			</Row>
			<Row id='cleaning'>
				<Container className='flex-reverse'>
					<Content>
						<ImgContent src={Cleaning} />
					</Content>
					<Content>
						<TextContent>
							<Typography
								variant="h1"
								color="black"
							>
								{t('SERVICEPAGE.SERVICE2.HEADING')}
							</Typography>
							<Typography
								variant="body"
								color="black"
								weight="300"
							>
								{t('SERVICEPAGE.SERVICE2.PARA')}
							</Typography>
							<Button
								textTransform="capitalize"
								variant="primary"
								display="block"
								type="submit"
								onClick={handleClick}
							>
								{t('BUTTON.BOOKSERVICE')}
							</Button>
						</TextContent>
					</Content>
				</Container>
			</Row>
			<Row id='operation'>
				<Container className='flex'>
					<Content>
						<ImgContent src={service} />
					</Content>
					<Content>
						<TextContent>
							<Typography
								variant="h1"
								color="light"
							>
								{t('SERVICEPAGE.SERVICE3.HEADING')}
							</Typography>
							<Typography
								variant="body"
								color="light"
								weight="300"
							>
								{t('SERVICEPAGE.SERVICE3.PARA')}
							</Typography>
							<Button
								textTransform="capitalize"
								variant="primary"
								display="block"
								type="submit"
								onClick={handleClick}
							>
								{t('BUTTON.BOOKSERVICE')}
							</Button>
						</TextContent>
					</Content>
				</Container>
			</Row>
			<Row id='Assistance'>
				<Container className='flex-reverse'>
					<Content>
						<ImgContent src={Assistance} />
					</Content>
					<Content>
						<TextContent>
							<Typography
								variant="h1"
								color="black"
							>
								{t('SERVICEPAGE.SERVICE4.HEADING')}
							</Typography>
							<Typography
								variant="body"
								color="black"
								weight="300"
							>
								{t('SERVICEPAGE.SERVICE4.PARA')}
							</Typography>
							<Button
								textTransform="capitalize"
								variant="primary"
								display="block"
								type="submit"
								onClick={handleClick}
							>
								{t('BUTTON.BOOKSERVICE')}
							</Button>
						</TextContent>
					</Content>
				</Container>
			</Row>
			<Row id="service" ref={ref}>
				<Container>
					<Typography
						variant="h2"
						color="light"
						align="center"
					>
						{t('SERVICEPAGE.FORMHEADING')}
					</Typography>
					<ServiceForm method='post' onSubmit={submitPage}>
						<InputGroup className='flex'>
							<InputLabelContainer className='w-50'>
								<InputLabel htmlFor='fname'>{t('SERVICEPAGE.FORMLABEL.FIRSTNAME')} *</InputLabel>
								<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.FIRSTNAME')} type={'text'} value={values.first_name} id='first_name' name='first_name' required onChange={handleChange} onBlur={handleChange} />
								{errors.first_name && <p>{errors.first_name}</p>}
							</InputLabelContainer>
							<InputLabelContainer className='w-50'>
								<InputLabel htmlFor='lname'>{t('SERVICEPAGE.FORMLABEL.LASTNAME')} *</InputLabel>
								<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.LASTNAME')} type={'text'} value={values.last_name} id='last_name' name='last_name' required onChange={handleChange} onBlur={handleChange} />
								{errors.last_name && <p>{errors.last_name}</p>}
							</InputLabelContainer>
						</InputGroup>
						<InputGroup className='flex'>
							<InputLabelContainer className='w-50'>
								<InputLabel htmlFor='email'>{t('SERVICEPAGE.FORMLABEL.EMAIL')} *</InputLabel>
								<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.EMAIL')} type={'email'} value={values.email} id='email' name='email' required onChange={handleChange} onBlur={handleChange} />
								{errors.email && <p>{errors.email}</p>}
							</InputLabelContainer>
							<InputLabelContainer className='w-50'>
								<InputLabel htmlFor='contact'>{t('SERVICEPAGE.FORMLABEL.CONTACTNO')} *</InputLabel>
								<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.CONTACTNO')} type={'number'} value={values.mobile_no} id='mobile_no' name='mobile_no' required onChange={handleChange} onBlur={handleChange} />
								{errors.mobile_no && <p>{errors.mobile_no}</p>}
							</InputLabelContainer>
						</InputGroup>
						<InputGroup className='flex'>
							<InputLabelContainer className='w-50'>
								<InputLabel htmlFor='address'>{t('SERVICEPAGE.FORMLABEL.ADDRESS')} *</InputLabel>
								<InputField placeholder={t('SERVICEPAGE.PLACEHOLDERS.ADDRESS')} name='address' id='address' value={values.address} required onChange={handleChange} onBlur={handleChange} />
								{errors.address && <p>{errors.address}</p>}
							</InputLabelContainer>
							<SelectLabelContainer className='w-50'>
								<SelectLabel htmlFor='service_type'>{t('SERVICEPAGE.FORMLABEL.SELECTTYPE')} *</SelectLabel>
								<Select id='service_type' name='service_type' onChange={(e) => {handleChange(e), changeForm(e);}} value={values.service_type} onBlur={handleChange} required>
									<Option value="Operation & Management">Operation & Management</Option>
									<Option value="Cleaning">Cleaning Service</Option>
									<Option value="24*7 Customer Assistance">24*7 Customer Assistance</Option>
									<Option value="Get a Quote">Get a Quote</Option>
								</Select>
								{errors.service_type && <p>{errors.service_type}</p>}
							</SelectLabelContainer>
						</InputGroup>
						{form ? <HandleQuoteForm /> : <HandleForm />}
						<InputGroup>
							<InputLabelContainer>
								<TextareaLabel htmlFor='message'>{t('SERVICEPAGE.FORMLABEL.MESSAGE')}</TextareaLabel>
								<Textarea placeholder={t('SERVICEPAGE.PLACEHOLDERS.MESSAGE')} value={values.message} name='message' id='message' rows={5} onChange={handleChange} />
							</InputLabelContainer>
						</InputGroup>
						<Button
							textTransform="capitalize"
							variant="primary"
							display="block"
							align="center"
							type="submit"
							disabled={Object.keys(errors).length > 0 ? true : false}
						>
							{t('BUTTON.BOOKSERVICE')}
						</Button>
					</ServiceForm>
				</Container>
			</Row>
			<Popup open={open} setOpen={setOpen} />
		</Wrapper>
	);
};

export default Service;