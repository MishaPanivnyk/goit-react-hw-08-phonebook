import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
`;
export const Message = styled.p`
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
`;
