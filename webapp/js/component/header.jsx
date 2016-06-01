var NewComponent = React.createClass({
  render: function() {
    return (

        <span>Header Logo</span>

    );
  }
});


ReactDOM.render(
  <NewComponent />,
  document.getElementById('header')
);