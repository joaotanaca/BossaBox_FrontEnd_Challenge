import styled from 'styled-components';

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
`;
export const AddInputTool = styled.input.attrs({
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
  ::placeholder {
    color: #b1adb9;
  }
`;

export const LabelAddInputs = styled.label`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 5px 0;
`;
