import React from 'react';
import './scss.scss';
import {Button, Card} from "react-bootstrap";

import constants from '../constants'
import localSto from '../localstorage'

import content from '../content';

class LoadBalancing extends React.Component {

	alternatives = this.findAlternatives();

	constructor(props) {
		super(props);
		this.state = {
			active: null,
			recommendedActive: false,
			profileSettings: localSto.loadState(constants.ls_settings_id)
		};
	}

	greenAlgorithm(item) {
		// The score is calculated based on the amount of visitors on specific weekdays and months.
		// For example, a Sunday in March gives the "worst" score, 50, since that is the most common time to visit Finnish national parks
		const dailyvisits = item.content.filter(b => b.type === 'stats_weekly')[0].content.visitors;
		const monthlyvisits = item.content.filter(b => b.type === 'stats_monthly')[0].content.visitors;
		const day = new Date().getDay() - 1; // mon-sun, 0-6
		const month = new Date().getMonth(); // mon-sun, 0-11
		const dayscore = 0.5 * ((dailyvisits[day] - Math.min(...dailyvisits)) / 7) / ((Math.max(...dailyvisits) - Math.min(...dailyvisits)) / 7);
		const monthscore = 0.5 * ((monthlyvisits[month] - Math.min(...monthlyvisits)) / 12) / ((Math.max(...monthlyvisits) - Math.min(...monthlyvisits)) / 12);
		const score = 100 * ((1 - dayscore - monthscore) / 2 + 0.5);
		return Math.round(score)
	}

	componentDidMount() {
	}

	setRecommendedActivePlan(item) {
		localSto.saveState(constants.ls_trips_id, item);
		this.setState({active: item.id, recommendedActive: !this.state.recommendedActive})
	}

	findAlternatives() {
		const chosen = localSto.loadState(constants.ls_trips_id);
		let results = [];
		content.locations.forEach(item => {
			results = [...results, {
				score: this.greenAlgorithm(item),
				item: item
			}]
		});
		const sorted = results.sort( r => r.score );
		const chosenResult = sorted.filter(o => o.item.id === chosen.id)[0];
		const minimiumResult = sorted.filter(o => o.item.id !== chosen.id)[0];
		return {
			chosen: chosenResult,
			alternative: minimiumResult
		}
	}

	alternativeCard(result, idx) {
		const item = result.item;
		return (
			<Card className='alternative-card item' key={idx}>
				<h3 className="greenScore picture-text-shadow">
					Green Score
					<br/>
					<span>{result.score} / 100</span>
				</h3>
				<Card.Img variant="top" src={item.image}/>
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						{item.subtitle}
					</Card.Subtitle>
					<Card.Text>
						{item.description}
					</Card.Text>
					{
						<Button variant="primary" className={{'hidden': item.id === localSto.loadState(constants.ls_trips_id).id}} onClick={() => this.setRecommendedActivePlan(item)}>Choose as primary plan</Button>
					}
				</Card.Body>
			</Card>
		)
	}

	render() {
		const socialAlternative = `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1HF_YTnKIP2Ef7-4VxwAm9w7JDFsSu7Ss" width="640" height="480"></iframe>`;
		const aloneAlternative = `<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1q9XB_8MS_5mzJuFAeggz7rR_9GGC7ce3" width="640" height="480"></iframe>`;
		const isSocial = this.state.profileSettings.isSocialToggle;
		const socialPreference = isSocial ? 'are a social individual' : 'prefer to be alone';
		const activeMap = (isSocial && this.state.recommendedActive) ? socialAlternative : aloneAlternative;
		return (
			<div className="load balancing">
				<h4 style={{marginTop: '0rem'}}>Your primary plan:</h4>
				{
					this.alternativeCard(this.alternatives.chosen)
				}
				<h4 style={{marginTop: '2rem'}}>You might want to look at this route:</h4>
				<p>Think about the environment etc, based on your profile we say that: you { socialPreference }.</p>
				{
					this.alternativeCard(this.alternatives.alternative)
				}
				<div className="map">
					<div dangerouslySetInnerHTML={{__html: activeMap}}></div>
				</div>
			</div>
		);
	}
}

export default LoadBalancing;