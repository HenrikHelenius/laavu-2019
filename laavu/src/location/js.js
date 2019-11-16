import React from 'react';
import { withRouter } from "react-router";
import './scss.scss';
import content from '../content'
import BackButton from "../backbutton";
import {Container, Row, Col, Button} from 'react-bootstrap'
import GenericAreaChart from "../generic-area-chart/js";

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
				return <GenericAreaChart content={block.content} title="Visitors by weekday"></GenericAreaChart>;
			case 'stats_monthly':
				return <GenericAreaChart content={block.content} title="Visitors by month"></GenericAreaChart>;
			default:
				return null;
		}
	}

	render() {
		let blockContent = ``;

		return (
			<Container className="location-component">
				<div style={{backgroundImage: `url(${this.state.item.image})`}} className="hero">
					<h2 className="picture-text-shadow">{this.state.item.name}</h2>
				</div>
				<Row>
					<Col>
						<BackButton />
					</Col>
					<Col style={{textAlign: 'right'}}>
						<Button variant="light" style={{marginRight: '1rem'}}>Directions</Button>
						<Button variant="primary">Add to plans</Button>
					</Col>
				</Row>

				{
					this.state.item.content.map(
						(block, idx) => {
							return <div key={idx}>{this.evaluateBlock(block)}</div>
						}
					)
				}
			</Container>
		);
	}
}

export default withRouter(Location);