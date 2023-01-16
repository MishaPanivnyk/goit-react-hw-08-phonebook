import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 20px;
  }
  input {
    width: 250px;

    font-size: 12px;

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
`;
