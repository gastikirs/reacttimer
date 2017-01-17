var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CoutdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered', () => {
		//Creo un espia
		var spy = expect.createSpy();

		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		//Paso el espia, de modo que chequeare si el espia es llamado o no.

		var $el = $(ReactDOM.findDOMNode(countdownForm));
		countdownForm.refs.seconds.value = '109';
		//Al ser valido deberia ser llamado. Simulare un submit
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(109);	
	});

	it('should not call onSetCountdown if invalid seconds entered', () => {
		//Creo un espia
		var spy = expect.createSpy();

		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		//Paso el espia, de modo que chequeare si el espia es llamado o no.

		var $el = $(ReactDOM.findDOMNode(countdownForm));
		countdownForm.refs.seconds.value = 'a';
		//Al ser valido deberia ser llamado. Simulare un submit
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();	
	});
});