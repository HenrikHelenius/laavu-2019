import React from 'react';
import './scss.scss';
import {Container, Jumbotron, Button, ProgressBar, Row, Col, Badge} from "react-bootstrap";
import Switch from "react-switch";

import constants from '../constants'
import localSto from '../localstorage'

class Profile extends React.Component {
	constructor(props) {
		super(props);
		const loaded = localSto.loadState(constants.ls_settings_id);
		this.state = loaded || {
			greenpoints: 43,
			badges: 75,
			isSocialToggle: true,
			isTentingToggle: false,
		};
		this.handleSocialChange = this.handleSocialChange.bind(this);
		this.handleTentingChange = this.handleTentingChange.bind(this);
	}

	handleSocialChange(checked) {
		this.setState({
			isSocialToggle: checked
		});
		localSto.saveState(constants.ls_settings_id, this.state)
	}


	handleTentingChange(checked) {
		this.setState({
			isTentingToggle: checked
		});
		localSto.saveState(constants.ls_settings_id, this.state)
	}

	increaseGreenpoints() {
		this.setState({greenpoints: this.state.greenpoints+1});
		localSto.saveState(constants.ls_settings_id, this.state)
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container>
				<Jumbotron>
					<h3><b>Aaro Isosaari</b></h3>
					<h6>
						<Badge pill variant="light" className="mr-2 badge-box-shadow">Public profile</Badge>
						<Badge pill variant="secondary" className="badge-box-shadow">Contributor</Badge>
					</h6>
					<div style={{textAlign: "center"}}>
						<div style={{display: "inline-block"}} className="profile-picture"></div>
						<div className="mb-2 mt-2">
							<a href="http://www.facebook.com/sharer.php?u=https://laavu.co&p[title]=Liity+Laavu:un+by+Visit+Finland">
								<Button variant="light" className="badge-box-shadow">Share on Facebook</Button>
							</a>
						</div>
						<div>
							<a href="mailto:friend@example.fi&Subject: Join Laavu">
								<Button variant="primary">Invite a friend by email</Button>
							</a>
						</div>
					</div>
				</Jumbotron>
				<div className="settings">
					<Row>
						<Col>
							<p>I prefer being <span>{this.state.isSocialToggle ? 'social 👥' : 'in solitude 👤'}</span></p>
							<Switch onChange={this.handleSocialChange} checked={this.state.isSocialToggle} />
						</Col>
						<Col>
							<p>I prefer <span>{this.state.isTentingToggle ? 'tenting ⛺️' : 'living in cabins 🏠'}</span></p>
							<Switch onChange={this.handleTentingChange} checked={this.state.isTentingToggle} />
						</Col>
					</Row>
				</div>
				<div className="sustainability">
					<h5><Badge pill variant="light" className="badge-box-shadow" style={{color: "#00711e"}}>Greenpoints</Badge></h5>
					<ProgressBar
						onClick={() => this.increaseGreenpoints()}
						className="green"
						now={this.state.greenpoints}
						label={`${this.state.greenpoints}%`}
						style={{marginTop: "1rem"}}
					/>
					<br/>
					<h6><b>Sustainable Finland pledge 🇫🇮</b></h6>
					<p>
						Nature has taken care of us for millions of years and now it’s time for us to take care of it as a return. By taking the Sustainable Finland Pledge, you make a promise to respect and treasure the Finnish nature, its inhabitants, and culture during your visit.
					</p>
					<a href="https://www.visitfinland.com/sustainable-finland-pledge/" target="_blank">
						<Button>Pledge now</Button>
					</a>
				</div>
				<Jumbotron>
					<div className="badges">
						<h5><b>Sustainable travelling badges 🎖</b></h5>
						<ProgressBar now={this.state.badges} label={`${this.state.badges}%`} />
						<Row className="mt-4 mb-6">
							<Col>
								<span className="vf-badge helsinki"></span>
								<p style={{marginTop: '0.5rem'}}><b>Helsinki badge</b></p>
							</Col>
							<Col>
								<div className="vf-badge lakeland"></div>
								<p style={{marginTop: '1rem'}}><b>Lakeland badge</b></p>
							</Col>
						</Row>
						<Row className="mt-4">
							<Col>
								<div className="vf-badge lapland locked"></div>
								<p style={{marginTop: '1rem'}}><b>Lapland badge</b></p>
							</Col>
							<Col>
								<div className="vf-badge archipelago"></div>
								<p style={{marginTop: '1rem'}}><b>Archipelago badge</b></p>
							</Col>
						</Row>
					</div>
				</Jumbotron>
			</Container>
		);
	}
}

export default Profile;
