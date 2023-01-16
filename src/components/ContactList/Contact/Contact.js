import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactListItem } from 'components/ContactList/Contact/Contact.styled';
import { useState } from 'react';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(deleteContact(id));
  };
  const [isDeleting, setIsDeleting] = useState(false);
  return (
    <ContactListItem>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={handleDelete}
        disabled={isDeleting && 'disabled'}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </ContactListItem>
  );
}

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
