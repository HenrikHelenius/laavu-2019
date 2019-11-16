import React from 'react';
import './scss.scss';

// Components
import Overview from "../overview/js";
import Trips from "../trips/js";
import Profile from "../profile/js";
import Location from "../location/js";
import {Switch, Link, Route, BrowserRouter as Router} from "react-router-dom";
import {Nav} from 'react-bootstrap';

class Root extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 'overview'
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="root tab-bottom-navigation-margin">
				<Router>
					<Switch>
						<Route exact path="/">
							<Overview/>
						</Route>
						<Route path="/trips">
							<Trips />
						</Route>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route path="/location:id" children={<Location />} />
					</Switch>
					<Nav
						fill
						variant="tabs"
						defaultActiveKey="overview"
						className="tab-bottom-navigation"
					>
						<Nav.Item>
							<Nav.Link as={Link} to="/trips" eventKey="trips">
								Trips
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/" eventKey="overview">
								<div className="icon-home"></div>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/profile" eventKey="profiles">
								Profile
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Router>
			</div>
		);
	}
}

export default Root;