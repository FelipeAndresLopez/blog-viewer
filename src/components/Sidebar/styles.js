import styled, { css } from 'styled-components';
import { accentColor, primaryColorText } from '../../styles/GlobalStyles';

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  min-width: 25%;
  height: 100%;
  position: fixed;   
  z-index: 20;
  overflow: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, .6);
  background-color: rgba(0, 0, 0, .6);

  & h1{
    padding: 10px 20px;
    font-style: italic;
    color: ${accentColor};
    font-weight: 500;
    text-align: center;
  }
  
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 100%;
  color: white;
`;

export const Anchor = styled.a`
  cursor: pointer;
`;

export const Item = styled.li`
  padding: 10px 20px;
  ${(props) => props.itemSelected && css`
    background-color: ${primaryColorText};
    border-bottom: 1px solid ${accentColor};
  `}
  &:hover{
    background-color: ${primaryColorText};
    border-bottom: 1px solid ${accentColor};
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${accentColor};
`;
