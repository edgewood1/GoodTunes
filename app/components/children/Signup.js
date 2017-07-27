var React = require('react');

var Signup = React.createClass({
  getInitialState: function() {
  	return {
  	  email: "",
  	  password: ""
  	};
  },
  updateEmail: function(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  },
  updatePassword: function(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    helpers.createUser(this.email, this.password).then(function(data) {
      console.log(data);
    }.bind(this));
    this.setState({
      email: "",
      password: ""
    });
  },
  render: function() {
	return (
    
	  <div className="container login">

	  	<h2>Sign up to save your favorite songs!</h2>
      <h3>Enter your information</h3>

	    <form onSubmit={this.onSubmit}>
		  <div className="form-group">
		    <label for="email">Email address</label>
		    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.updateEmail} required></input>
		  </div>
		  <div class="form-group">
		    <label for="password">Password</label>
		    <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.updatePassword} required></input>
		  </div>
		  <button type="submit" className="btn btn-default">Sign Up</button>
		</form>
	  </div>
 
	);
  }
});

module.exports = Signup;