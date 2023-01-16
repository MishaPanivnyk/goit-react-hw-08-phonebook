import { useSelector } from 'react-redux';
import { getFilterList } from 'redux/selectors';
import Contact from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactsList.styled';

export default function ContactList() {
  const filterList = useSelector(getFilterList);
  return (
    <ContactsList>
      {filterList.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactsList>
  );
}
