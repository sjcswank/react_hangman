import React, {Component} from 'react';

export default class Form extends Component {

	state = {
		value: ""
	}

	handleChange = (e) => {
	  	this.setState({
	  		value: e.target.value
	  	});
	  }

	handleSubmit = (e) => {
	    e.preventDefault();

	    	this.props.handleGuess(this.state.value);
	    	this.setState({
	    		value: ""
	    	});
	}


	render() {
		return (
			<form className="input" onSubmit={this.handleSubmit}>
	          <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus />
	          <button type="submit">Guess!</button>
	        </form>
        )
	}
}