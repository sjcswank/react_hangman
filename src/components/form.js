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
	    if (this.props.lettersGuessed.includes(this.state.value)) {
          console.log("test");
    	}
	    else {
	    	this.props.handleGuess(this.state);
		}
	}


	render() {
		return (
			<form className="input" onSubmit={this.handleSubmit}>
	          <input type="text" value={this.state.value} onChange={this.handleChange} />
	        </form>
        )
	}
}