import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 250px;
  border: none;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
