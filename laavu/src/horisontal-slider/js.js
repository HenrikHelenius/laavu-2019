import React from 'react';
import './scss.scss';
import {withRouter, Link} from "react-router-dom";
import {Card, Button} from "react-bootstrap";

import constants from '../constants'
import localSto from '../localstorage'

class HorisontalSlider extends React.Component {

	noLink = false;
	noSubtitle = false;

	constructor(props) {
		super(props);
		this.noLink = props.noLink ? props.noLink : false ;
		this.noSubtitle = props.noSubtitle ? props.noSubtitle : false;

		this.state = {
			items: props.items,
			isDown: false,
			startX: 0,
			scrollLeft: 0,
			sliderClassName: ''
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);

		this.routeChange = this.routeChange.bind(this);
	}

	routeChange(path) {
		this.props.history.push(path);
	}

	handleMouseDown(e) {
		this.state.isDown = true;
		this.state.sliderClassName = 'active';
		this.state.startX = e.pageX - e.target.offsetLeft;
		this.state.crollLeft = e.target.scrollLeft;
	}

	handleMouseUp(e) {
		this.state.isDown = false;
		this.state.sliderClassName = '';
	}

	handleMouseMove(e) {
		if (!this.state.isDown) return;
		e.preventDefault();
		const x = e.pageX - e.target.offsetLeft;
		const walk = (x - this.state.startX) * 3; //scroll-fast
		e.target.scrollLeft = this.state.scrollLeft - walk;
		console.log(walk);
	}

	handleMouseLeave() {
		this.state.isDown = false;
		this.state.sliderClassName = '';
	}

	addToTrip(item) {
		console.log('add to trip', item);
		localSto.saveState(constants.ls_trips_id, item)
	}

	genericCard(item, idx, noLink, noSubtitle) {
		return (
			<Card className='horisontal-scroll-card item' key={idx}
			      onClick={() => !noLink && this.routeChange(`/location:${item.id}`)}>
				<Card.Img variant="top" src={item.image}/>
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					{
						!noSubtitle &&
						<Card.Subtitle className="mb-2 text-muted">
							{item.subtitle}
						</Card.Subtitle>
					}
					<Card.Text>
						{item.description}
					</Card.Text>
					{
						!noLink &&
						<Button variant="primary" as={Link} to={`/location:${item.id}`}>Explore</Button>
						&& <Button variant="primary" onClick={() => this.addToTrip(item)}>Add to Trip</Button>
					}
				</Card.Body>
			</Card>
		)
	}

	render() {
		return (
			<div
				className={`horisontal-scroll items ${this.state.sliderClassName}`}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseMove={this.handleMouseMove}
				onMouseLeave={this.handleMouseLeave}
			>
				{
					this.state.items.map((item, idx) => {
						return this.genericCard(item, idx, this.noLink, this.noSubtitle)
					})
				}
			</div>
		);
	}
}

export default withRouter(HorisontalSlider);