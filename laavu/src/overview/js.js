import React from 'react';
import './scss.scss';
// Components
import HorisontalSlider from "../horisontal-slider/js";
import {Container, Row, Col, Jumbotron, Button, Carousel} from 'react-bootstrap'

import content from '../content'

class Overview extends React.Component {

	experiencesMarketing = [
		{
			name: 'Something unforgettable is just behind the corner',
			image: 'https://source.unsplash.com/nzmPi4d5cvc/500x300',
			description: `First choose the location for your trip by clicking on Add to .`
		},
		{
			name: 'You could be kayaking in Finland...',
			image: 'https://source.unsplash.com/ym3vp_TeDLE/500x300',
			description: `But first ... add your first location and see all available experiences on "My trip" tab.`,
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
				<Carousel style={{height: "205"}} controls={false}>
					{
						content.carousel.map((item, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img
										style={{height: "205", backgroundColor: "whitesmoke"}}
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
					<h2>Lavuu & it's Peers</h2>
					<p>
						The #1 social sustainability app for giving each trailblazer a network to personalize their own kind of experiences in the beauty of Finnish nature.
					</p>
					<p>
						<a href="#locations">
							<Button variant='primary'>Lorem todo ipsum</Button>
						</a>
					</p>
				</Jumbotron>
				<Row className="no-bottom-margin" id="locations">
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Starting points for your adventure</h3>
						<HorisontalSlider items={content.locations}></HorisontalSlider>
					</Col>
				</Row>
				<Row className="no-bottom-margin">
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Experiences</h3>
						<HorisontalSlider items={this.experiencesMarketing} noLink={true} noSubtitle={true}></HorisontalSlider>
					</Col>
				</Row>
				<Jumbotron>
					<h2>Lorem Ipusm</h2>
					<p>
						Sustis & safety, social. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi minus nemo numquam omnis repellendus suscipit tempore vero. At culpa earum error nobis nostrum placeat quisquam tempore, unde. Ad, maxime pariatur.
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