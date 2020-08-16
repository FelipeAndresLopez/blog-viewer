import styled from 'styled-components';
import { primaryColor, primaryTextColor } from '../../styles/GlobalStyles';

export const Menu = styled.nav`

  display: flex;
  width: 30%;
  height: 100%;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, .9);
  background-color: ${primaryColor};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  color: white;

`;

export const Item = styled.li`
  padding: 10px;
`;
