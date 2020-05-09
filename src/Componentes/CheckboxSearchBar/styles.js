import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

export const ContainerCheckbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 10px;
`;

export const CheckContainer = styled.div`
  position: relative;
`;

export const CheckInput = styled.div`
  width: 22px;
  height: 22px;
  border: solid #dedce1 1px;
  border-radius: 5px;
  background: ${({ checked }) => (checked ? '#365DF0' : '#F5F4F6')};
  margin: 0 5px;
`;

export const CheckIcon = styled(FiCheck)`
  display: ${({ checked }) => (checked ? 'unset' : 'none')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
