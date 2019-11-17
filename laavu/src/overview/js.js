import React from 'react';
import './scss.scss';
// Components
import HorisontalSlider from "../horisontal-slider/js";
import {Container, Row, Col, Jumbotron, Button, Carousel} from 'react-bootstrap'

import content from '../content'

class Overview extends React.Component {

	experiencesMarketing = [
		{
			name: 'Something unforgettable is just behind the corner...',
			image: 'https://source.unsplash.com/nzmPi4d5cvc/500x300',
			description: `Explore different locations for your trip, and find the most suitable one by utilizing our valueable insights and data.`
		},
		{
			name: 'Imagine yourself kayaking in a beautiful Finnish lake...',
			image: 'https://source.unsplash.com/ym3vp_TeDLE/500x300',
			description: `...And once here, using Laavu to connect with local people for company, help, and support. Check out the "Peers" tab below!`,
		}
	];

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
	}

	// <div className="icon"></div>
	// <div className="text">Laavu</div>

	render() {
		return (
			<Container>
				<header id="top">
					<div className="logo-laavu">
						<div className="laavu-png"></div>
					</div>
				</header>
				<Carousel style={{height: "255"}} controls={false}>
					{
						content.carousel.map((item, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img
										style={{height: "255", backgroundColor: "whitesmoke"}}
										className="d-block w-100"
										src={item.image}
									/>
									<Carousel.Caption>
										<h3 className="picture-text-shadow">{item.name}</h3>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
				<Jumbotron>
					<h3><b>Welcome to Laavu 👋</b></h3>
					<p>
						The #1 social sustainability app for making Finnish forests more accessible, and helping each trailblazer personalize their own kind of experiences in the beauty of Finnish nature. Built by wanderers, for wanderers.
					</p>
					<p>
						<a href="#locations">
							<Button variant='primary'>Start exploring</Button>
						</a>
					</p>
				</Jumbotron>
				<Row className="no-bottom-margin" id="locations">
					<Col>
						<h4 style={{marginBottom: '1rem'}}>Your adventure starts here 👇</h4>
						<HorisontalSlider items={content.locations}></HorisontalSlider>
					</Col>
				</Row>
				<Row className="no-bottom-margin">
					<Col>
						<h4 style={{marginBottom: '1rem'}}>Travel & Sustainability 🌿</h4>
						<HorisontalSlider items={this.experiencesMarketing} noLink={true} noSubtitle={true}></HorisontalSlider>
					</Col>
				</Row>
				<Jumbotron>
					<h3><b>Enjoy nature with a community of other explorers 🏕</b></h3>
					<p>
						Laavu also includes a hyperlocal messaging feature to make your outdoor experiences more unique, social, and unforgettable. Find people to hike with, share extra supplies with others, and ask for help. In your pocket, 24/7.
					</p>
					<p>
						<a href="#top">
							<Button variant='primary'>Back to the top</Button>
						</a>
					</p>
				</Jumbotron>
			</Container>
		);
	}
}

export default Overview;
