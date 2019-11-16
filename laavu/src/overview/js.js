import React from 'react';
import './scss.scss';
// Components
import HorizontalScroll from 'react-scroll-horizontal'
import {withRouter, Link} from "react-router-dom";
import {Container, Row, Col, Card, Jumbotron, Button, Carousel} from 'react-bootstrap'

import content from '../content'

class Overview extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.routeChange = this.routeChange.bind(this);
	}

	routeChange(path) {
		this.props.history.push(path);
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
										<Button variant="secondary" as={Link} to={`${item.path}`}>Read more</Button>
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
				<Row>
					<Col>
						<h3 style={{marginBottom: '1rem'}}>Starting points for your adventure</h3>
						<HorizontalScroll
							pageLock={true}
							reverseScroll={true}
							className='horisontal-scroll'
						>
							{
								content.locations.map((item, idx) => {
									return (
										<Card className='horisontal-scroll-card' key={idx} onClick={ () => this.routeChange(`/location:${item.id}`)}>
											<Card.Img variant="top" src={item.image}/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">
													{item.subtitle}
												</Card.Subtitle>
												<Card.Text>
													{item.description}
												</Card.Text>
											</Card.Body>
										</Card>
									)
								})
							}
						</HorizontalScroll>
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

export default withRouter(Overview);