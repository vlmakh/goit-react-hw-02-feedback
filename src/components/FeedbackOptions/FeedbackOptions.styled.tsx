import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 4px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  text-transform: capitalize;

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    background-color: grey;
  }
`;
