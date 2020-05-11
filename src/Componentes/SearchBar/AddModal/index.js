import React from 'react';

import {
  ContainerAddModal,
  AddInputTool,
  AddInputToolDescription,
  AddInputToolLink,
  LabelAddInputs,
} from './styles';

function AddModal() {
  return (
    <ContainerAddModal>
      <LabelAddInputs>
        Tool Name
        <AddInputTool placeholder="Tool" />
      </LabelAddInputs>
      <LabelAddInputs>
        Tool Link
        <AddInputToolLink placeholder="Tool link" />
      </LabelAddInputs>
      <LabelAddInputs>
        Tool Description
        <AddInputToolDescription placeholder="Tool Description" />
      </LabelAddInputs>
    </ContainerAddModal>
  );
}

export default AddModal;
