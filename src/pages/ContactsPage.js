import { Section } from 'components/Section/Section';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactsList } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};

export default ContactsPage;