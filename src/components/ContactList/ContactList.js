import { useSelector } from 'react-redux';
import { getFilterList } from 'redux/selectors';
import Contact from 'components/ContactList/Contact/Contact';
import {
  ContactsList,
  Title,
} from 'components/ContactList/ContactsList.styled';
export default function ContactList() {
  const filterList = useSelector(getFilterList);

  return filterList.length === 0 ? (
    <Title>⚠️ There is not any contacts. ⚠️</Title>
  ) : (
    <ContactsList>
      {filterList.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
}
