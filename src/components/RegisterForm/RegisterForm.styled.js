import styled from 'styled-components';

export const Form = styled.form`
  max-width: 350px;
  padding: 50px 30px 30px;
  margin: 50px auto 30px;
  background: white;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Label = styled.label`
  left: 13px;
  color: #9d959d;
  font-size: 25px;
  font-weight: 300;
`;
export const Title = styled.h2`
  position: relative;
  z-index: 5;
  text-align: center;
  color: #4a90e2;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 10px;
  line-height: 40px;
  font-family: 'Roboto', sans-serif;
  background: none;
  border-width: 0;
  border-bottom: 2px solid #4a90e2;
  transition: all 0.2s ease;
  &:focus {
    outline: 0;
    border-color: #f77a52;
  }
`;
export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  justify-content: center;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 20px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    background: #2ee59d;
    box-shadow: 0 15px 20px rgba(46, 229, 157, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;
