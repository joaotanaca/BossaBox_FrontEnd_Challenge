import React from 'react';

import { ContainerModal, ModalCard } from './styles';

function Modal({ children, show }) {
  return (
    <ContainerModal show={show}>
      <ModalCard>{children}</ModalCard>
    </ContainerModal>
  );
}

export default Modal;
