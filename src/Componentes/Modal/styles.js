import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
`;

export const ModalCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  max-width: 600px;
  width: calc(100% - 20px);
  min-height: 150px;
  padding: 20px;
  position:relative;
`;
