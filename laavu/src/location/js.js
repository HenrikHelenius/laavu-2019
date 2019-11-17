import React from 'react';
import { withRouter } from "react-router";
import './scss.scss';
import content from '../content'
import BackButton from "../backbutton";
import {Container, Row, Col, Button} from 'react-bootstrap'
import GenericAreaChart from "../generic-area-chart/js";
import localSto from "../localstorage";
import constants from "../constants";

class Location extends React.Component {
	constructor(props) {
		const id = props.match.params.id.replace(':', '');
		const item = content.locations.filter(item => item.id === id)[0];
		super(props);
		this.state = {
			item: item
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	evaluateBlock(block) {
		switch(block.type) {
			case 'text':
				return <p>{block.content}</p>;
			case 'image':
				return <img src={block.content}/>;
			case 'html':
				return <div dangerouslySetInnerHTML={{ __html: block.content }}></div>;
			case 'stats_weekly':
				return <GenericAreaChart content={block.content} title="Total visitors by weekday, 2015 →"></GenericAreaChart>;
			case 'stats_monthly':
				return <GenericAreaChart content={block.content} title="Total visitors by month, 2015 →"></GenericAreaChart>;
			default:
				return null;
		}
	}

	getCoordinates(item) {
		return item.content.filter(b => b.type === 'coordinates')[0]
	}

	render() {
		return (
			<Container className="location-component">
				<div style={{backgroundImage: `url(${this.state.item.image})`}} className="hero">
					<h2 className="picture-text-shadow"><b>{this.state.item.name}</b></h2>
				</div>
				{
					this.state.item.content.map(
						(block, idx) => {
							return <div key={idx}>{this.evaluateBlock(block)}</div>
						}
					)
				}
				<Row>
					<Col>
						<BackButton />
					</Col>
					<Col style={{textAlign: 'right'}}>
						<a href={`https://www.google.fi/maps/search/${this.getCoordinates(this.state.item).latitude}+${this.getCoordinates(this.state.item).longitude}`} target="_blank">
							<Button variant="light" style={{marginBottom: '0.5rem'}}>Directions</Button>
						</a>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default withRouter(Location);
