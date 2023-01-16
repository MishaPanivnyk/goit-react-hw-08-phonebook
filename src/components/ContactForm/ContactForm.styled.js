import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
  }
  input {
    width: 250px;

    font-size: 14px;

    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    background-color: transparent;
    padding: 5px;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      border-color: #2196f3;
    }
  }
  button {
    padding: 5px 5px;
    border: none;
    border-radius: 4px;
    min-width: 90px;

    background-color: #2196f3;
    color: #ffffff;

    font-family: inherit;
    font-weight: 500;
    font-size: 14px;

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
