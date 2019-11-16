import React from 'react';
import Chart from 'react-apexcharts'
import './scss.scss';

class GenericAreaChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			options: {
				title: {
					text: props.title,
					align: 'center',
					floating: true,
				},
				chart: {
					toolbar: {
						show: false
					},
					animateGradually: {
						enabled: true,
						delay: 200
					},
					dynamicAnimation: {
						enabled: true,
						speed: 350
					}
					// foreColor: '#fd686c' // label texts
				},
				xaxis: {
					categories: props.content.xAxis
				},
				yaxis: {
					show: false
				},
				grid: {
					yaxis: {
						lines: {
							show: false
						}
					}
				},
				theme: {
					mode: 'light',
					monochrome: {
						enabled: true,
						color: '#fd686c',
						shadeTo: 'light',
						shadeIntensity: 0.1
					},
				}
			},
			series: [{
				name: 'Visitors',
				data: props.content.visitors
			}]
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<Chart options={this.state.options} series={this.state.series} type="area" height="200" />
		);
	}
}

export default GenericAreaChart;