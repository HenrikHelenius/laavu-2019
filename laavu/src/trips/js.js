import React from 'react';
import './scss.scss';
import {Container, Jumbotron} from "react-bootstrap";
import LoadBalancing from "../load-balancing/js"

class Trips extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<Container>
				<div style={{marginTop: '1rem'}}>
					<h3>Home for your plans</h3>
					<LoadBalancing></LoadBalancing>
				</div>
			</Container>
		);
	}
}

export default Trips;