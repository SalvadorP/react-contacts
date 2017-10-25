import React, { Component } from 'react';
import ListContacts from './ListContacts';


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
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
        
      </div>      
    )
  }
}
export default App;
