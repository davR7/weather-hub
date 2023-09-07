import styled from 'styled-components';
import { FlexRow_C_Y } from '../../styles/mixins-style';

export const SearchBar = styled.form`
  background-color: #fff;
  border-radius: 40px;
  ${FlexRow_C_Y}
  height: 40px;
  padding: 2px;
`;

export const Input = styled.input`
  flex: 1;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0 10px;
`;

export const Button = styled.button`
  background-color: #f0af4b;
  border: none;
  border-radius: 60%;
  padding: 8px;
  cursor: pointer;

  img {
    width: 18px;
  }
`;
