import React, {Component} from 'react';

// If a component is only using a render method to display content, then it can be converted into a Stateless Functional Component.
function ListContactsF(props) {
    const contacts = props.contacts;
    return (        
        <ol className="contact-list">
            {contacts.map(contact => (
                <li key={contact.id} className="contact-list-item">
                    <div className="contact-avatar" style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }} />
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <button className="contact-remove">Remove</button>
                </li>
            ))}
        </ol>  
    );
}

class ListContacts extends Component {
    render() {
        // console.log('Props', this.props);
        const contacts = this.props.contacts;
        return (
            <ol className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }} />
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className="contact-remove">Remove</button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts