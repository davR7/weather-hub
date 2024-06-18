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
  position: relative;
  display: inline-block;
  padding: 8px;
  background: #ffd700;
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 60%;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.25),
    0 1px 0 rgba(255, 255, 255, 0.25) inset,
    0 0 0 rgba(0, 0, 0, 0.5) inset,
    0 1.1em 0 rgba(255, 255, 255, 0.25) inset,
    0 -1.1em 1.25em rgba(0, 0, 0, 0.32) inset,
    0 1.1rem 1.25em rgba(255, 255, 255, 0.05) inset,
    0 1.1em 6px rgba(255, 255, 255, 0.1) inset;
  cursor: pointer;

  img {
    width: 18px;
  }
`;
