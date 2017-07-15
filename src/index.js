'use strict';

const {h, Text, Component} = require('ink');
const PropTypes = require('prop-types');
const spinners = require('cli-spinners');
const omit = require('object.omit');

class Spinner extends Component {
	constructor(props) {
		super(props);

		this.state = {
			frame: 0
		};

		this.switchFrame = this.switchFrame.bind(this);
	}

	getSpinner() {
		return spinners[this.props.type] || spinners.dots;
	}

	render(props, {frame}) {
		const textProps = omit(props, 'type');
		const spinner = this.getSpinner();

		return (
			<Text {...textProps}>
				{spinner.frames[frame]}
			</Text>
		);
	}

	componentDidMount() {
		const spinner = this.getSpinner();

		this.timer = setInterval(this.switchFrame, spinner.interval);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	switchFrame() {
		const {frame} = this.state;

		const spinner = this.getSpinner();
		const isLastFrame = frame === spinner.frames.length - 1;
		const nextFrame = isLastFrame ? 0 : frame + 1;

		this.setState({
			frame: nextFrame
		});
	}
}

Spinner.propTypes = {
	type: PropTypes.string
};

Spinner.defaultProps = {
	type: 'dots'
};

module.exports = Spinner;
