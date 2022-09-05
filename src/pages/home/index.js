import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import Slider from 'react-slick';
import axios from 'axios';
import { omit } from 'lodash';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router';
import { GiSolarPower } from 'react-icons/gi';
import { BsHandThumbsUp } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { GrSteps } from 'react-icons/gr';
import { MdOutlineCleaningServices } from 'react-icons/md';
import Popup from '../../components/Popup';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import store from '../../store';
import {
	AboutBg,
	Adani,
	Assistance,
	Cleaning,
	HomeBg,
	Mission,
	service,
	Survey,
	Tata,
	Vision,
	APS,
	Redren,
	Waaree,
	Pixon,
	Renewsys
} from '../../images';
import {
	AbsHeadText,
	ButtonContainer,
	Card,
	CardContainer,
	CardImg,
	ContactForm,
	Container,
	FlexContainer,
	HomePage,
	Img,
	InputContainer,
	LargeContainer,
	MenuItems,
	Overlay,
	Row,
	Section,
	SmallContainer,
	TestimonialCard,
	WhyUsCard,
	WhyUsCardContainer,
	Wrapper,
	Input,
	Textarea,
	ImgContainer,
	Headings,
	Buttons,
	PartnersImg,
	PartnersCard,
	WhyUsIcon,
	HomeBgImg,
	HomeSliderImg,
	CardText,
	HeadingText,
	InputError,
} from './styled';

const Home = () => {
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState({
		first_name: '',
		last_name: '',
		mobile_no: '',
		whatsapp_no: '',
		email: '',
		message: 'No Message'
	});
	const [apiData, setApiData] = useState([]);
	const [errors, setErrors] = useState({});
	let emailpattern = `[a-z0-9]+@[a-z]+\\.[a-z]${2, 3}`;

	useEffect(() => {
		axios.get(`${store}/testinomial/`)
			.then((response) => {
				setApiData(response.data.data);
			});
	}, []);
	useEffect(() => {
		document.title = 'EnergyClue | Home';
	}, []);
	let navigate = useNavigate();
	function gotoQuotes() {
		navigate('/get-quotes');
	}
	function gotoContact() {
		navigate('/contact');
	}
	function gotoService() {
		navigate('/services');
	}
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
						last_name: 'please enter lastname'
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
	let homeBgSlider = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		nextArrow: false,
		autoplay: true
	};
	let settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		nextArrow: false,
		autoplay: true,
		loop: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	let testimonialSetting = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		nextArrow: false,
		autoplay: true
	};
	return (
		<HomePage>
			<Wrapper>
				<Overlay />
				<Slider {...homeBgSlider} className="home-slider">
					<HomeBgImg>
						<HomeSliderImg src={HomeBg} />
					</HomeBgImg>
					<HomeBgImg>
						<HomeSliderImg src={Vision} />
					</HomeBgImg>
					<HomeBgImg>
						<HomeSliderImg src={Mission} />
					</HomeBgImg>
				</Slider>
				<HeadingText>
					<Typography
						variant="h1"
						color="light"
						display="block"
					>
						{t('HOME.TITLE')}
					</Typography>
					<Typography
						variant="body"
						color="light"
						display="block"
						className="subtitle"
					>
						{t('HOME.SUBTITLE')}
					</Typography>
				</HeadingText>
				<FlexContainer>
					<MenuItems>
						<Button
							textTransform="capitalize"
							variant="primary"
							onClick={gotoQuotes}
						>
							{t('BUTTON.GETQUOTE')}
						</Button>
					</MenuItems>
					<MenuItems>
						<Typography
							variant="h2"
							color="light"
							align="center"
							display="block"
							className="home-head"
						>
							<GiSolarPower />
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.FIRSTITEM.TEXT1')}
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.FIRSTITEM.TEXT2')}
						</Typography>
					</MenuItems>
					<MenuItems>
						<Typography
							variant="h2"
							color="light"
							align="center"
							display="block"
							className="home-head"
						>
							{t('HOME.MENUITEMS.SECONDITEM.HEADING')}
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.SECONDITEM.TEXT1')}
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.SECONDITEM.TEXT2')}
						</Typography>
					</MenuItems>
					<MenuItems>
						<Typography
							variant="h2"
							color="light"
							align="center"
							display="block"
							className="home-head"
						>
							{t('HOME.MENUITEMS.THIRDITEM.HEADING')}
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.THIRDITEM.TEXT1')}
						</Typography>
						<Typography
							variant="caption"
							color="light"
							align="center"
							display="block"
						>
							{t('HOME.MENUITEMS.THIRDITEM.TEXT2')}
						</Typography>
					</MenuItems>
				</FlexContainer>
			</Wrapper>
			<Section className='about'>
				<ImgContainer className='about-banner'>
					<Img src={AboutBg} />
				</ImgContainer>
				<Container className="bottom">
					<LargeContainer className='paratext'>
						<Typography
							variant="body"
							color="black"
							display="block"
							weight="600"
						>
							{t('ABOUT.PARATEXT')}
						</Typography>
						<br />
						<Typography
							variant="body"
							color="black"
							display="block"
							weight="400"
						>
							{t('ABOUT.PARATEXT1')}
						</Typography>
						<br />
						<Typography
							variant="body"
							color="black"
							display="block"
							weight="400"
						>
							{t('ABOUT.PARATEXT1')}
						</Typography>
					</LargeContainer>
					<SmallContainer className='heading-text'>
						<Typography
							variant="caption"
							color="black"
							display="block"
							weight="400"
						>
							{t('ABOUT.SUBHEADING')}
						</Typography>
						<Typography
							variant="h3"
							color="black"
							display="block"
						>
							{t('ABOUT.HEADING')}
						</Typography>
						<ButtonContainer>
							<Button
								textTransform="capitalize"
								variant="primary"
								onClick={gotoContact}
							>
								{t('BUTTON.CONTACT')}
							</Button>
						</ButtonContainer>
					</SmallContainer>
				</Container>
			</Section>
			<Section className="service">
				<Container className='desktop'>
					<AbsHeadText className='service-abstext-up'>
						{t('SERVICE.ABSTEXT')}
					</AbsHeadText>
					<AbsHeadText className='service-abstext-down'>
						{t('SERVICE.ABSTEXT')}
					</AbsHeadText>
				</Container>
				<Container className='service-container'>
					<Typography
						variant="h1"
						color="light"
						align="center"
					>
						{t('SERVICE.SERVICECONTAINER.HEADING')}
					</Typography>
					<Typography
						variant="caption"
						color="light"
						align="center"
						weight="400"
						className="service-para"
					>
						{t('SERVICE.SERVICECONTAINER.PARATEXT')}
					</Typography>
					<CardContainer>
						<Card className='card'>
							<CardImg src={Survey} />
							<CardText>
								<Typography
									variant="h3"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD1.CARDHEADING')}
								</Typography>
								<Typography
									variant="caption"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD1.CARDPARA')}
								</Typography>
								<ButtonContainer>
									<Button
										textTransform="capitalize"
										variant="primary"
										onClick={gotoService}
									>
										{t('BUTTON.KNOWMORE')}
									</Button>
								</ButtonContainer>
							</CardText>
						</Card>
						<Card>
							<CardImg src={Cleaning} />
							<CardText>
								<Typography
									variant="h3"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD2.CARDHEADING')}
								</Typography>
								<Typography
									variant="caption"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD2.CARDPARA')}
								</Typography>
								<ButtonContainer>
									<Button
										textTransform="capitalize"
										variant="primary"
										onClick={gotoService}
									>
										{t('BUTTON.KNOWMORE')}
									</Button>
								</ButtonContainer>
							</CardText>
						</Card>
						<Card>
							<CardImg src={service} />
							<CardText>
								<Typography
									variant="h3"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD3.CARDHEADING')}
								</Typography>
								<Typography
									variant="caption"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD3.CARDPARA')}
								</Typography>
								<ButtonContainer>
									<Button
										textTransform="capitalize"
										variant="primary"
										onClick={gotoService}
									>
										{t('BUTTON.KNOWMORE')}
									</Button>
								</ButtonContainer>
							</CardText>
						</Card>
						<Card>
							<CardImg src={Assistance} />
							<CardText>
								<Typography
									variant="h3"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD4.CARDHEADING')}
								</Typography>
								<Typography
									variant="caption"
									color="light"
									display="block"
								>
									{t('SERVICE.SERVICECONTAINER.CARD4.CARDPARA')}
								</Typography>
								<ButtonContainer>
									<Button
										textTransform="capitalize"
										variant="primary"
										onClick={gotoService}
									>
										{t('BUTTON.KNOWMORE')}
									</Button>
								</ButtonContainer>
							</CardText>
						</Card>
					</CardContainer>
				</Container>
			</Section>
			<Section className='vision'>
				<Row className='upper'>
					<LargeContainer className='vision-banner'>
						<Img src={Vision} />
					</LargeContainer>
					<SmallContainer className='heading-text'>
						<Typography
							variant="caption"
							color="black"
							display="block"
							weight="500"
						>
							{t('VISION.SUBHEADING')}
						</Typography>
						<Typography
							variant="h3"
							color="black"
							display="block"
						>
							{t('VISION.HEADING')}
						</Typography>
						<ButtonContainer className='button'>
							<Button
								textTransform="capitalize"
								variant="primary"
								onClick={gotoQuotes}
							>
								{t('BUTTON.GETQUOTE')}
							</Button>
						</ButtonContainer>
						<ButtonContainer className='button'>
							<Button
								textTransform="capitalize"
								variant="primary"
								onClick={gotoContact}
							>
								{t('BUTTON.CONTACT')}
							</Button>
						</ButtonContainer>
					</SmallContainer>
				</Row>
				<Container className='vision-para'>
					<Typography
						variant="body"
						color="black"
						display="block"
						weight="600"
					>
						{t('VISION.PARATEXT')}
					</Typography>
					<br />
					<Typography
						variant="body"
						color="black"
						display="block"
						weight="400"
					>
						{t('VISION.PARATEXT1')}
					</Typography>
					<br />
					<Typography
						variant="body"
						color="black"
						display="block"
						weight="400"
					>
						{t('VISION.PARATEXT2')}
					</Typography>
				</Container>
			</Section>
			<Section className='mission'>
				<Row className='upper reverse'>
					<LargeContainer className='mission-banner'>
						<Img src={Mission} />
					</LargeContainer>
					<SmallContainer className='heading-text flex-column justify-between'>
						<Headings>
							<Typography
								variant="caption"
								color="light"
								display="block"
								weight="400"
							>
								{t('MISSION.SUBHEADING')}
							</Typography>
							<Typography
								variant="h3"
								color="light"
								display="block"
							>
								{t('MISSION.HEADING')}
							</Typography>
						</Headings>
						<Buttons>
							<ButtonContainer className='button'>
								<Button
									textTransform="capitalize"
									variant="primary"
									onClick={gotoQuotes}
								>
									{t('BUTTON.GETQUOTE')}
								</Button>
							</ButtonContainer>
							<ButtonContainer className='button'>
								<Button
									textTransform="capitalize"
									variant="primary"
									onClick={gotoContact}
								>
									{t('BUTTON.CONTACT')}
								</Button>
							</ButtonContainer>
						</Buttons>
					</SmallContainer>
				</Row>
				<Container className='mission-para'>
					<Typography
						variant="body"
						color="light"
						display="block"
						weight="600"
					>
						{t('MISSION.PARATEXT')}
					</Typography>
					<br />
					<Typography
						variant="body"
						color="light"
						display="block"
						weight="400"
					>
						{t('MISSION.PARATEXT1')}
					</Typography>
					<br />
					<Typography
						variant="body"
						color="light"
						display="block"
						weight="400"
					>
						{t('MISSION.PARATEXT2')}
					</Typography>
				</Container>
			</Section>
			<Section className='partners'>
				<Container>
					<Typography
						variant="h1"
						color="black"
						display="block"
						align="center"
					>
						{t('PARTNERS.HEADING')}
					</Typography>
					<Slider {...settings} className="partners-slider">
						<PartnersCard className='Hello'>
							<PartnersImg src={Adani} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={Tata} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={APS} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={Redren} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={Waaree} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={Pixon} />
						</PartnersCard>
						<PartnersCard>
							<PartnersImg src={Renewsys} />
						</PartnersCard>
					</Slider>
				</Container>
			</Section>
			<Section className="choose-us">
				<Container className='choose-us-container'>
					<Typography
						variant="h1"
						display="block"
						color="light"
						align="center"
					>
						{t('WHYUS.HEADING')}
					</Typography>
					<WhyUsCardContainer>
						<WhyUsCard>
							<WhyUsIcon>
								<FaAward />
							</WhyUsIcon>
							<Typography
								variant="h4"
								display="block"
								align="center"
								color="light"
							>
								{t('WHYUS.CARD1CONTENT.HEADING')}
							</Typography>
							<Typography
								variant="caption"
								display="block"
								align="center"
								color="light"
								weight="400"
							>
								{t('WHYUS.CARD1CONTENT.PARATEXT')}
							</Typography>
						</WhyUsCard>
						<WhyUsCard>
							<WhyUsIcon>
								<BsHandThumbsUp />
							</WhyUsIcon>
							<Typography
								variant="h4"
								display="block"
								align="center"
								color="light"
							>
								{t('WHYUS.CARD2CONTENT.HEADING')}
							</Typography>
							<Typography
								variant="caption"
								display="block"
								align="center"
								color="light"
								weight="400"
							>
								{t('WHYUS.CARD2CONTENT.PARATEXT')}
							</Typography>
						</WhyUsCard>
						<WhyUsCard>
							<WhyUsIcon>
								<GrSteps />
							</WhyUsIcon>
							<Typography
								variant="h4"
								display="block"
								align="center"
								color="light"
							>
								{t('WHYUS.CARD3CONTENT.HEADING')}
							</Typography>
							<Typography
								variant="caption"
								display="block"
								align="center"
								color="light"
								weight="400"
							>
								{t('WHYUS.CARD3CONTENT.PARATEXT')}
							</Typography>
						</WhyUsCard>
						<WhyUsCard>
							<WhyUsIcon>
								<MdOutlineCleaningServices />
							</WhyUsIcon>
							<Typography
								variant="h4"
								display="block"
								align="center"
								color="light"
							>
								{t('WHYUS.CARD4CONTENT.HEADING')}
							</Typography>
							<Typography
								variant="caption"
								display="block"
								align="center"
								color="light"
								weight="400"
							>
								{t('WHYUS.CARD4CONTENT.PARATEXT')}
							</Typography>
						</WhyUsCard>
					</WhyUsCardContainer>
				</Container>
			</Section>
			<Section className='testimonials'>
				<Container>
					<Typography
						variant="h1"
						color="black"
						display="block"
						align="center"
					>
						{t('TESTIMONIAL.HEADING')}
					</Typography>
					<Slider {...testimonialSetting} className='testimonial-slider'>
						{apiData.map((item, index) => {
							return (
								<TestimonialCard key={index}>
									<Typography
										variant="h3"
										color="black"
										display="block"
										align="center"
									>
										{item.name}
									</Typography>
									<Typography
										variant="body"
										color="black"
										display="block"
										align="center"
									>
										{item.message}
									</Typography>
									<Typography
										variant="body"
										color="black"
										display="block"
										align="center"
									>
										{item.business_name}
									</Typography>
								</TestimonialCard>
							);
						})}
					</Slider>
				</Container>
			</Section>
			<Section className="contact">
				<Container>
					<Typography
						variant="h1"
						display="block"
						color="light"
						align="center"
					>
						{t('CONTACT.HEADING')}
					</Typography>
					<ContactForm onSubmit={submitPage}>
						<InputContainer>
							<InputError>
								<Input placeholder='First Name' value={values.first_name} name="first_name" onChange={handleChange} onBlur={handleChange} required />
								{errors.first_name && <p>{errors.first_name}</p>}
							</InputError>
							<InputError>
								<Input placeholder='Last Name' value={values.last_name} name="last_name" onChange={handleChange} onBlur={handleChange} required />
								{errors.last_name && <p>{errors.last_name}</p>}
							</InputError>
						</InputContainer>
						<InputContainer>
							<InputError>
								<Input placeholder='Contact Number' value={values.mobile_no} type={'number'} name="mobile_no" onChange={handleChange} onBlur={handleChange} required />
								{errors.mobile_no && <p>{errors.mobile_no}</p>}
							</InputError>
							<InputError>
								<Input placeholder='Email Address' type={'email'} value={values.email} name="email" onChange={handleChange} onBlur={handleChange} required />
								{errors.email && <p>{errors.email}</p>}
							</InputError>
						</InputContainer>
						<Textarea placeholder='Enter Message' rows={5} value={values.message} name="message" onChange={handleChange} onBlur={handleChange} />
						<ButtonContainer>
							<Button
								textTransform="capitalize"
								variant="primary"
								align="center"
								type="submit"
								disabled={Object.keys(errors).length > 0 ? true : false}
							>
								{t('BUTTON.CONTACT')}
							</Button>
						</ButtonContainer>
					</ContactForm>
				</Container>
			</Section>
			<Popup open={open} setOpen={setOpen} />
		</HomePage>
	);
};

export default Home;