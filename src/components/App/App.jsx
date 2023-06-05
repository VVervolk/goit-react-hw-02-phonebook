import { Contacts } from 'components/Contacts/Contacts';
import { Contactsform } from 'components/Form/Form';
import { InputSearch } from 'components/InputSearch/InputSearch';
import { Component } from 'react';
import { Section } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = (contact, { resetForm }) => {
    if (this.checkAvailability(contact)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
    resetForm();
  };

  checkAvailability = contact => {
    return this.state.contacts.some(option => option.name === contact.name);
  };

  deleteContact = index => {
    this.setState({
      contacts: this.state.contacts.filter(value => value.id !== index),
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Section>
        <h1>Phonebook</h1>
        <Contactsform onSubmit={this.handleSubmit}></Contactsform>
        <h2>Contacts</h2>
        <InputSearch
          value={filter}
          onChange={e => this.setState({ filter: e.target.value })}
        />
        <Contacts
          options={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        ></Contacts>
      </Section>
    );
  }
}
