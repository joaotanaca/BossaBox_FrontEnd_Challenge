import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const ContainerTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: solid #ebeaed 1px;
  background: #f5f4f6;
  border-radius: 5px;
  width: 80%;
  margin: 5px;
`;

export const ToolTagLabel = styled.label`
  width: 80%;
`;

export const TagsBoxContainer = styled.div`
  background: #fff;
  border-radius: 5px;
  margin: 0 2.5px;
  padding-left: 5px;
  height: 30px;
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child {
    margin-left: 5px;
  }
`;

export const RemoveTag = styled.span`
  cursor: pointer;
  position: relative;
  height: 100%;
  padding-right: 20px;
`;

export const RemoveTagIcon = styled(FiX)`
  font-size: 16px;
  position: absolute;
  top: 65%;
  right: 2.5px;
  transform: translate(0, -65%);
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
