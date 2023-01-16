import styled from 'styled-components';

export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  p {
    font-family: inherit;
    font-size: 14px;
  }

  span {
    margin-left: 10px;
  }

  button {
    border: none;
    border-radius: 4px;
    min-width: 45px;

    background-color: #2196f3;
    color: #ffffff;

    font-family: inherit;
    font-size: 12px;

    text-align: center;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #2196f3;
      color: #ffffff;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }
`;
