import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

export const ContainerAddModal = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  label {
    input,
    textarea {
      margin: 10px 0;
    }
  }
  .error {
    border: solid 1px #f95e5a;
    color: #f95e5a;
    background: #feefee;
    &::placeholder {
      color: #f95e5a;
    }
  }
`;
export const TitleAddModal = styled.h3`
  width: 95%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const IconAddModal = styled(FiPlus)`
  margin-right: 5px;
  font-weight: bold;
`;

export const AddInputTool = styled.input.attrs({
  type: 'text',
})`
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  height: 30px;
  border-radius: 5px;
  padding-left: 5px;
  outline: none;
  ::placeholder {
    color: #b1adb9;
  }
`;
export const AddInputToolLink = styled.input.attrs({
  type: 'text',
})`
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  height: 30px;
  border-radius: 5px;
  padding-left: 5px;
  ::placeholder {
    color: #b1adb9;
  }
`;
export const AddInputToolDescription = styled.textarea`
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  border-radius: 5px;
  padding-left: 5px;
  height: 100px;
  resize: none;
  font-family: 'Source Sans Pro';
  ::placeholder {
    color: #b1adb9;
  }
`;

export const InputAddTag = styled.input`
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  padding-left: 5px;
  height: 30px;
  flex: 1;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const ContainerAddButtonPost = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const AddButtonPost = styled.button`
  padding: 10px 10px;
  background: #365df0;
  border-radius: 5px;
  color: white;
  border: 0;
  &:hover {
    background: #2f55cc;
  }
  &:active {
    background: #244aa8;
  }
`;

export const LabelAddInputs = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5px 0;
`;
