import React from 'react';
import './scss.scss';
// Components
import HorisontalSlider from "../horisontal-slider/js";
import {Link} from "react-router-dom";
import {Container, Row, Col, Jumbotron, Button, Carousel} from 'react-bootstrap'

import content from '../content'

class Overview extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {
		return (
			<Container>
				<header>
					<div className="logo-laavu">
						<div className="icon"></div>
						<div className="text">Laavu</div>
					</div>
				</header>
				<Carousel>
					{
						content.carousel.map((item, idx) => {
							return (
								<Carousel.Item key={idx}>
									<img
										className="d-block w-100"
										src={item.image}
									/>
									<Carousel.Caption>
										<h3 className="picture-text-shadow">{item.name}</h3>
										<p className="picture-text-shadow">{item.description}</p>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})
					}
				</Carousel>
				<Jumbotron>
					<h2>Laavu</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur doloribus fugit id illum
						labore libero nihil quasi quidem quo, reprehenderit repudiandae! Aliquam hic molestiae molestias odit
						omnis possimus quae. TODO
					</p>
					<p>
						<Button variant='primary'>Lorem todo ipsum</Button>
					</p>
				</Jumbotron>
				<Row className="no-bottom-margin">
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Starting points for your adventure</h3>
						<HorisontalSlider items={content.locations}></HorisontalSlider>
					</Col>
				</Row>
				<Row>
					<Col>
						<h3>Experiences</h3>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Overview;