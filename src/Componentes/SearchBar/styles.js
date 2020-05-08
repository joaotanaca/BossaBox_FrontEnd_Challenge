import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const ContainerSearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
`;

export const IconSearch = styled(FiSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0, -50%);
  color: #b1adb9;
`;

export const InputSearchBar = styled.input.attrs({
  type: 'text',
  placeholder: 'Digite o que está procurando...',
})`
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  max-width: 280px;
  width: 40%;
  height: 30px;
  border-radius: 5px;
  padding-left: 30px;
  ::placeholder {
    color: #b1adb9;
  }
`;
