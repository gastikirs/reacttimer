var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	it('should render pause when started', () => {
		var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
		var $el = $(ReactDOM.findDOMNode(controls));
		var $pauseButton = $el.find('button:contains(Pause)');

		expect($pauseButton.length).toBe(1);
	});
});