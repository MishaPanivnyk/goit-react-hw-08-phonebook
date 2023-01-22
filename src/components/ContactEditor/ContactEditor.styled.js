import styled from 'styled-components';
export const Div = styled.div``;
export const DivTitle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
export const Title = styled.p`
  font-weight: 900;
  letter-spacing: 1.5px;
  color: #333;
  font-size: 23px;
  text-transform: uppercase;
  &:not(:first-child) {
    padding-left: 350px;
  }
`;
export const Header = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: #333;
  font-size: 23px;
  text-transform: uppercase;
  margin: 0;
`;

export const Section = styled.section`
  display: flex;
  /* max-width: 992px; */
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
`;
