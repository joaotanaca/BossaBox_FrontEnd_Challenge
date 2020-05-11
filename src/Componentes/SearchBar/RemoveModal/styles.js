import styled from "styled-components";

export const ModalTitle = styled.h4`
  font-size: 26px;
  margin-top: 0;
`;

export const ModalDescription = styled.p`
  font-size: 20px;
  color: #8f8a9b;
`;

export const ModalConfirmRemoveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ModalConfirmRemove = styled.button`
  background: #f95e5a;
  color: white;
  border-radius: 5px;
  border: 0;
  padding: 10px 20px;
  &:hover {
    background: #cc4c4c;
  }
  &:active {
    background: #a53f3f;
  }
`;
