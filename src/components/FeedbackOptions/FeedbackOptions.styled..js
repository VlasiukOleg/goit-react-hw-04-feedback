import styled from 'styled-components';

export const OptionsBtnWrapper = styled.div`
  text-align: center;
`;

export const OptionsBtn = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 5px 15px;
  margin-right: 10px;
  transition: background-color 200ms ease-out;

  &:hover {
    background-color: ${({ option }) => {
      if (option === 'good') {
        return 'lightgreen';
      } else if (option === 'neutral') {
        return 'lightgrey';
      } else if (option === 'bad') {
        return 'lightcoral';
      }
    }};
  }
`;
