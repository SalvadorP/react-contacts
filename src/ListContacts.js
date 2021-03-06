import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

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
                    <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">Remove</button>
                </li>
            ))}
        </ol>  
    );
}

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;

        let showingContacts = contacts
        if (query) {
            // if there are some special chars, escape them and filter on each contact using the input of search box.
            const match = new RegExp(escapeRegExp(query), 'i');
            showingContacts = contacts.filter((contact) => match.test(contact.name));
        } 

        showingContacts.sort(sortBy('name'));
        
        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input 
                        className="search-contacts" 
                        type="text" 
                        placeholder="Search Contacts" 
                        value={query} 
                        onChange={(event) => this.updateQuery(event.target.value)} 
                    />
                    <Link
                      to="/create"
                      className="add-contact"
                    >Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {showingContacts.length} of {contacts.length} total</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}

                <ol className="contact-list">
                    {showingContacts.map(contact => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }} />
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className="contact-remove">Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListContacts
