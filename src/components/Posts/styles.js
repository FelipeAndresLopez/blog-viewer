import styled from 'styled-components';
import { accentColor, primaryColorText } from '../../styles/GlobalStyles';

export const Title = styled.h1`
  width: fit-content;
  padding: 10px;
  margin: 10px auto;
  background-color: ${accentColor};
  color: ${primaryColorText};
  font-style: italic;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
`;
