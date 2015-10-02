var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables:[Actions],
	getApps: function(){
		return Api.get('topics/defaults')
			.then(function(json){
				this.apps = ['a', 'b', 'c', 'fredrik testar react'];
				this.triggerChange();
			}.bind(this));		
	},
	triggerChange: function(){
		this.trigger('change', this.apps);
	}
});