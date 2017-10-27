import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListContacts from './ListContacts';
import ListContactsF from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

// The props in the components are like the parameters on the functions.
class App extends Component {
  // NEVER initialize the state using props!!
  state = {
    contacts: []    
  }

  componentDidMount() {
    // ContactsAPI getAll returns a JS promise, if all is ok it will return contacts array so we can change the state with it.
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    // The setState can be invoked in two ways
    // The reason to use the setState with the function is to make more operations. 
    // Instead of replacing entirely the state we replace it but using the value returned by the function.
    // And we use the last value of the state.
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    // Now we are removing the contact at the backend server.
    ContactsAPI.remove(contact);

    // This way you only replace the state with a literal or something.
    // this.setState({ })    
  }
  render() {
    // <ListContactsF onDeleteContact={this.removeContact} contacts={this.state.contacts} />
    return (
      <div>
        <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts} 
          />                
      </div>      
    )
  }
}

// PropTypes will check that contacts is an array and onDeleteContact has a function.
// It's a way to validate intended data types.
// ListContacts.PropTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }

export default App;
