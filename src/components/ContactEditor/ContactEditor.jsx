import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import { selectContacts } from 'redux/contacts/selectors';
import { Div, Header, Section, Title, DivTitle } from './ContactEditor.styled';

export const ContactEditor = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  return (
    <Div>
      <Header>add new contact:</Header>
      <Section>
        {contacts.length > 0 && <Filter />}
        <ContactForm />
        {isLoading && !error && <Loader />}
      </Section>
      {contacts.length > 0 && (
        <DivTitle>
          <Title>Name</Title>
          <Title>Number</Title>
        </DivTitle>
      )}
    </Div>
  );
};
