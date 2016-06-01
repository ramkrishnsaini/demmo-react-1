/*
 * Components
 */

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
      )
    );
  },
});

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render: function() {
    var oldContact = this.props.value;
    var onChange = this.props.onChange;
    
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Npi Number (required)',
          value: this.props.value.name,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {name: e.target.value}));
          },
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.value.email,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {email: e.target.value}));
          },
        }),
        React.createElement('textarea', {
          placeholder: 'Office fax Number',
          value: this.props.value.description,
          onChange: function(e) {
            onChange(Object.assign({}, oldContact, {description: e.target.value}));
          },
        }),
        React.createElement('button', {type: 'submit'}, "Submit")
      )
    );
  },
});

var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.email; })
      .map(function(contact) { return React.createElement(ContactItem, contact); });

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Registration"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        React.createElement(ContactForm, {
          value: this.props.newContact,
          onChange: function(contact) { console.log(contact); },
        })
      )
    );
  },
});



/*
 * Model
 */

var contacts = [
  
];

var newContact = {name: "", email: "", description: ""};


/*
 * Entry point
 */

ReactDOM.render(

  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact,
  }),
  document.getElementById('react-app')
);
