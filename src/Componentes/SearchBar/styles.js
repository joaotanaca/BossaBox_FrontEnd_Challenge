import styled from 'styled-components';
import { FiSearch, FiPlus, FiX } from 'react-icons/fi';

export const ContainerSearchBar = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  position: relative;
`;

export const IconInputSearch = styled(FiSearch)`
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

export const ContainerCheckboxSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonAddSearchBar = styled.button`
  padding: 10px 10px;
  padding-left: 25px;
  background: #365df0;
  border-radius: 5px;
  color: white;
  border: 0;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(0, -50%);
  &:hover {
    background: #2f55cc;
  }
  &:active {
    background: #244aa8;
  }
`;

export const IconButtonAdd = styled(FiPlus)`
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translate(0, -50%);
`;

export const ContainerTools = styled.div`
  width: 100%;
`;

export const ContainerTool = styled.div`
  width: calc(100% - 40px);
  margin: 20px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 7px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 20px;
  position: relative;
`;

export const TitleTool = styled.a.attrs({
  target: '_blank',
})`
  color: #365df0;
`;

export const DescriptionTool = styled.p``;

export const TagsToolContainer = styled.div``;

export const TagTool = styled.b`
  margin: 0 5px;
  &:first-child {
    margin-left: 0;
  }
`;

export const RemoveTool = styled.b`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

export const RemoveIconTool = styled(FiX)`
  position: absolute;
  top: 50%;
  left: -17px;
  transform: translate(0, -50%);
`;

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

export const CloseIconModal = styled(FiX)`
  position: absolute;
  right: 20px;
  top: 25px;
  font-size: 20px;
  cursor: pointer;
`;
