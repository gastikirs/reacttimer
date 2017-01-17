var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({

	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'			
		}
	},

	componentDidUpdate: function(prevProps, prevStates) {
		if(this.state.timerStatus != prevStates.timerStatus) {
			switch(this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({count: newCount});
		}, 1000);
	},

	handleStatusChange: function(newStatus) {
		this.setState({timerStatus: newStatus});
	},

	render: function() {
		var {count, timerStatus} = this.state;	

		return (
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
			</div>
		);
	}

});

module.exports = Timer;