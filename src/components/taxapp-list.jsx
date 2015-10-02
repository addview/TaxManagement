var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<div>

			
				  <div className="col-sm-6 col-md-3">
				    <div className="thumbnail">
				      <img height="100%" width="100%" src="http://www.bloomfieldcfo.com/images/pages/tax-structuring-and-management.jpg" alt="--" />
				      <div className="caption">
				        <h3>Thumbnail label</h3>
				        <p>aa : {this.props.aa}</p>
				        <p>
				        	<input type="button" className="btn btn-info" value="Goo" onClick={this.props.addOne}></input>
				         </p>
				      </div>
				    </div>
				  </div>
				

			</div>
		);
	}
});