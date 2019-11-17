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
										<h5 className="picture-text-shadow">{item.name}</h5>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
				<Jumbotron>
					<h2>Welcome to Laavu.</h2>
					<p>
						The #1 social sustainability app for making Finnish forests more accessible, and helping each trailblazer personalize their own kind of experiences in the beauty of Finnish nature.
					</p>
					<p>
						<a href="#locations">
							<Button variant='primary'>Start exploring</Button>
						</a>
					</p>
				</Jumbotron>
				<Row className="no-bottom-margin" id="locations">
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Your adventure starts here</h3>
						<HorisontalSlider items={content.locations}></HorisontalSlider>
					</Col>
				</Row>
				<Row className="no-bottom-margin">
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Travel & Sustainability</h3>
						<HorisontalSlider items={this.experiencesMarketing} noLink={true} noSubtitle={true}></HorisontalSlider>
					</Col>
				</Row>
				<Jumbotron>
					<h2>Nature experiences and a community of explorers.</h2>
					<p>
						Laavu has all you need for unique, social, and sustainable outdoor experiences. Curated routes, personal hiker profile, and a community forum will guarantee your trips to be unforgettable. Built by wanderers, for wanderers.
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
