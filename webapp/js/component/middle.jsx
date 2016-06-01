var NewComponent = React.createClass({
  render: function() {
    return (
	<div>
	<div className="row">
	<h2> Welcome to</h2>
	</div>
	<div className="row">
	<h2> THE ACCREDO PRESCRIBER WEBSITE</h2>
	</div>
	<div className="row">
	<h3> REQUEST FOR REGISTRATION</h3>
	</div>
	<div className="row">
	<div className="col-md-6">
	<span> ARE YOU THE NPI OWNER?</span>
	</div>
	<div className="col-md-4">
	<input type="radio" name="npiOwner" checked/>Yes
	<input type="radio" name="npiOwner"/>No
	</div>
	</div>
      <ul className="container-border">
        <li>For new account verification purposes, we require that a prescriber NPI owner create their account first.</li>
        <li>Once the NPI owner account has been validated and activated, then additional associate staff user accounts can be created.</li>
        <li>Each account is unique to each person and email address, and for PHI security purpose should not be shared with anyone other than the identified user.</li>
      </ul>
	  </div>
    );
  }
});

ReactDOM.render(
  <NewComponent />,
  document.getElementById('middle')
);