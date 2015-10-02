var React = require('react');
var Actions = require('../actions');
var TaxManagementStore = require('../stores/taxmanagement-store');
var Reflux = require('reflux');
var TaxAppList = require('./taxapp-list');

var i = 0;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(TaxManagementStore, 'onChange')
	],
	getInitialState: function() {
		return {
			apps: [] 
		};
	},	
	componentWillMount: function() {
		console.log('cwm');
		Actions.getApps();
	},
	render: function() {
		return (
			<div>
				<TaxAppList addOne={this.handleClick} aa={'vvvvvv'}></TaxAppList>
			
				
				
			</div>
		);
	},
	onChange: function(event, apps){		
		this.setState({apps: apps})
	},
	handleClick: function(e){
		console.log(i++);
	}
});