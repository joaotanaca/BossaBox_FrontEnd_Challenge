import React from 'react';

import {
  ContainerTags,
  TagsBoxContainer,
  ToolTagLabel,
  RemoveTag,
  RemoveTagIcon,
} from './styles';
import { InputAddTag } from '../styles';

function InputTags({
  tags,
  deleteArrayTags,
  refTagsInput,
  handleKeyPress,
  errTags,
}) {
  return (
    <>
      <ToolTagLabel>Tags</ToolTagLabel>
      <ContainerTags>
        {tags.map((tag, index) => {
          return (
            <TagsBoxContainer key={index}>
              {tag}
              <RemoveTag
                onClick={() => {
                  deleteArrayTags(tag, index);
                }}
              >
                <RemoveTagIcon />
              </RemoveTag>
            </TagsBoxContainer>
          );
        })}
        <InputAddTag
          ref={refTagsInput}
          type="text"
          onKeyPress={handleKeyPress}
          className={errTags ? 'error' : ''}
        />
      </ContainerTags>
    </>
  );
}

export default InputTags;
