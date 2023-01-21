import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import { Div, Header, Section } from './ContactEditor.styled';

export const ContactEditor = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Div>
      <Header>add new contact:</Header>
      <Section>
        <Filter />
        <ContactForm />
        {isLoading && !error && <Loader />}
      </Section>
    </Div>
  );
};
