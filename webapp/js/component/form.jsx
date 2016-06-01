var NewComponent = React.createClass({
  render: function() {
    return (

      <form action="#">
        NPI NUMBER:<br />
        <input type="text" name="npiNumber" /><br />
        EMAIL:<br />
        <input type="text" name="email" /><br /><br />
		OFFICE FAX NUMBER:<br />
        <input type="text" name="officeFaxNumber" /><br /><br />
        <input type="submit" defaultValue="Submit" />
      </form>
    );
  }
});

ReactDOM.render(
  <NewComponent />,
  document.getElementById('form')
);