import React from 'react';

import {
  ModalTitle,
  ModalDescription,
  ModalConfirmRemove,
  ModalConfirmRemoveContainer,
} from './styles';

function RemoveModal({removeName, removeTool}) {
  return (
    <>
      <ModalTitle>Remove tool</ModalTitle>
      <ModalDescription>
        Are you sure you want to remove {removeName}?
      </ModalDescription>
      <ModalConfirmRemoveContainer>
        <ModalConfirmRemove onClick={removeTool}>Confirm</ModalConfirmRemove>
      </ModalConfirmRemoveContainer>
    </>
  );
}

export default RemoveModal;
