import styled from 'styled-components';
import { accentColor, primaryColorText } from '../../styles/GlobalStyles';

export const Title = styled.div`
  padding: 10px;
  background-color: ${accentColor};
  color: ${primaryColorText};
  & h1{
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  }
`;
