import React from 'react';
import './scss.scss';
import {Container, Form, Col, Row, Button, Accordion, Card, Badge} from "react-bootstrap";
import Modal from 'react-modal';

import localSto from "../localstorage";
import constants from "../constants";

Modal.setAppElement('#root');

class Trips extends React.Component {
	posts = [
		...localSto.loadState(constants.ls_posts_id) || [],
		{
			name: 'Johan',
			picture: 'https://source.unsplash.com/hh3ViD0r0Rc',
			distance: '200',
			oneliner: 'Leftover sausages at Kattilajärvi!',
			message: `Just a grilled a bunch of sausages, feel free to come & grab them from my place on the north side of Kattilajärvi!`,
			topic: 'supply 🎁'
		},
		{
			name: 'Eero',
			picture: 'http://source.unsplash.com/3Y366aqddJ0',
			distance: '5000',
			oneliner: 'Up for exploring the newest track in Nuuksio?',
			message: `Ciao everyone! Woke up this morning feeling like going for a casual morning hike. I'm an energetic urban explorer with a passion for environmental impact, feel free to shoot me a message!`,
			topic: 'social 👫'
		},
		{
			name: 'Jenni',
			picture: 'https://source.unsplash.com/Cd7dYdJKIKk',
			distance: '300',
			oneliner: 'Fell from a cliff - badly hurt!',
			message: `Had a 3 meter fall and I think both of my legs are broken. Called an ambulance but it's going to take a while, is there anyone nearby who could help out a bit?`,
			topic: 'emergency 🆘'
		},
		{
			name: 'Tero',
			picture: 'http://source.unsplash.com/MPlv9gCp1tY',
			distance: '750',
			oneliner: 'Best tracks near Haltia?',
			message: `Just arrived in Haltia. I first planned hiking to Ruuhijärvi but I'm having a second thought. Any suggestions? Also up for any social opportunities, let me know if you want to hike with good company ;)`,
			topic: 'questions 🤔'
		},
		{
			name: 'Anna',
			picture: 'http://source.unsplash.com/QvOxpRqzwbY',
			distance: '920',
			oneliner: 'Fell through ice, help needed asap',
			message: `Had an awful fall and currently have no place to warm up and dry the clothes. Getting badly freesed. Please help!`,
			topic: 'emergency 🆘'
		},
		{
			name: 'Joonatan',
			picture: 'http://source.unsplash.com/QhKX67yT7wk',
			distance: '1500',
			oneliner: 'Extra firewood and toilet paper',
			message: `Hi all, I'm just finishing my trip and wanted to let you know that I left plenty of wood and toilet paper in the Haukkalampi's laavu. Feel free to use them :)`,
			topic: 'supply 🎁'
		}
	];
	posts = this.returnOnlyUniquePosts(this.posts);

	constructor(props) {
		super(props);
		this.state = {
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	returnOnlyUniquePosts(array) {
		let unique = {};
		return array.filter(obj => !unique[obj.oneliner] && (unique[obj.oneliner] = true))
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const topic = event.target.elements.type.value;
		const message = event.target.elements.message.value;
		const oneliner = event.target.elements.oneliner.value;
		const post = {
			name: 'Aaro',
			picture: 'https://source.unsplash.com/Kt8eGw8_S8Y',
			distance: '0',
			oneliner: oneliner,
			message: message,
			topic: topic
		};
		this.posts = [post, ...this.posts];
		this.posts = this.returnOnlyUniquePosts(this.posts);

		localSto.saveState(constants.ls_posts_id, [...this.posts]);
		this.closeModal()
	};

	// <LoadBalancing></LoadBalancing>
	render() {
		return (
			<Container>
				<div style={{marginTop: '1rem'}}>
					<h4 className="header"><span>Peers</span><Button variant="light" className="button-shadow ml-3" onClick={this.openModal}>+ Add</Button></h4>
					<p className="mt-4 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto debitis dicta eos inventore laboriosam mollitia nostrum qui reprehenderit soluta temporibus? Accusamus alias consectetur eos facere inventore ipsam itaque molestias optio.
					</p>
					<div className="post-container">
						<Accordion defaultActiveKey="0">
							{
								this.posts.map((post, idx) => {
									return (
										<Card key={idx}>
											<Card.Header>
												<Accordion.Toggle className="toggle" eventKey={idx}>
													<div className="post-container">
														<div>
															<div className="picture" style={{backgroundImage: `url(${post.picture + '/100x100'})`}}/>
															<span className="name">{post.name}</span>
														</div>
														<div className="right-section">
															<h6>{post.oneliner}</h6>
															<p className="vertical-center"><Badge className="mr-2 badge-box-shadow badge-white" variant="light">{post.topic}</Badge><span>{post.distance}m away</span></p>
														</div>
													</div>
												</Accordion.Toggle>
											</Card.Header>
											<Accordion.Collapse eventKey={idx}>
												<Card.Body>
													<Row>
														<Col>
															<p>{post.message}</p>
														</Col>
													</Row>
													<Row>
														<Col>
															<a href="tel:+35844900892">
																<Button variant="secondary">Call</Button>
															</a>
															<a href="http://m.me/Lavuu">
																<Button variant="light" className="button-shadow" style={{marginLeft: "0.5rem"}}>Message</Button>
															</a>
														</Col>
													</Row>
												</Card.Body>
											</Accordion.Collapse>
										</Card>
									)
								})
							}
						</Accordion>
					</div>
				</div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
				>
					<Form onSubmit={this.handleSubmit}>
						<h5>Have something to ask or share to your peers?</h5>
						<Form.Group controlId="type">
							<Form.Label>Category</Form.Label>
							<Form.Control as="select">
								<option>Emergency 🆘</option>
								<option>Supply 🎁</option>
								<option>Questions 🤔</option>
								<option>Social 👫</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="oneliner">
							<Form.Label>Subject</Form.Label>
							<Form.Control type="text" placeholder="Subject" />
						</Form.Group>
						<Form.Group controlId="message">
							<Form.Label>Describe your situation</Form.Label>
							<Form.Control as="textarea" rows="2" />
						</Form.Group>
						<Button className="submit-button" variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal>

			</Container>
		);
	}
}

export default Trips;
