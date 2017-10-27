import React, { Component } from 'react';
import ListContacts from './ListContacts';
import ListContactsF from './ListContacts';


// The props in the components are like the parameters on the functions.
class App extends Component {
  // NEVER initialize the state using props!!
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]    
  }
  removeContact = (contact) => {
    // The setState can be invoked in two ways
    // The reason to use the setState with the function is to make more operations. 
    // Instead of replacing entirely the state we replace it but using the value returned by the function.
    // And we use the last value of the state.
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    // This way you only replace the state with a literal or something.
    // this.setState({ })    
  }
  render() {
    // <ListContactsF onDeleteContact={this.removeContact} contacts={this.state.contacts} />
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />        
        
      </div>      
    )
  }
}
export default App;
