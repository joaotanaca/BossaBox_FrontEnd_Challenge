import React, { useState, createRef } from 'react';

import {
  ContainerAddModal,
  TitleAddModal,
  IconAddModal,
  AddInputTool,
  AddInputToolDescription,
  AddInputToolLink,
  LabelAddInputs,
  ContainerAddButtonPost,
  AddButtonPost,
} from './styles';
import InputTags from './InputTags';

function AddModal({ addTool }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [err, setErr] = useState([]);
  const [tags, setTags] = useState([]);
  const refTagsInput = createRef();
  const refNameInput = createRef();
  const refLinkInput = createRef();
  const refDescriptionInput = createRef();

  function handleKeyPress({ key, target: { value } }) {
    if (key === 'Enter' && value !== '') {
      setTags([...tags, value.toLowerCase()]);
      refTagsInput.current.value = '';
    }
  }

  function deleteArrayTags(tag, index) {
    const tagsArr = [...tags];
    const indexArr = tagsArr.indexOf(tag);
    tagsArr.splice(indexArr, 1);
    setTags(tagsArr);
  }

  async function postToolData() {
    if (!name || !link || !description) {
      let errArray = {};
      if (!name) {
        errArray = { ...errArray, name: true };
      }
      if (!link) {
        errArray = { ...errArray, link: true };
      }
      if (!description) {
        errArray = { ...errArray, description: true };
      }
      if (tags.length === 0) {
        errArray = { ...errArray, tags: true };
      }
      return setErr(errArray);
    }
    const response = addTool({
      title: name,
      link: link,
      description: description,
      tags: tags,
    });
    refNameInput.current.value = '';
    refLinkInput.current.value = '';
    refDescriptionInput.current.value = '';
    refTagsInput.current.value = '';
    setTags([]);
    return response;
  }
  return (
    <ContainerAddModal>
      <TitleAddModal>
        <IconAddModal /> Add new tool
      </TitleAddModal>
      <LabelAddInputs>
        Tool Name
        <AddInputTool
          placeholder="Name"
          onChange={e => {
            setName(e.target.value);
          }}
          className={err.name ? 'error' : ''}
          ref={refNameInput}
        />
      </LabelAddInputs>
      <LabelAddInputs>
        Tool Link
        <AddInputToolLink
          placeholder="Link"
          onChange={e => {
            setLink(e.target.value);
          }}
          className={err.link ? 'error' : ''}
          ref={refLinkInput}
        />
      </LabelAddInputs>
      <LabelAddInputs>
        Tool Description
        <AddInputToolDescription
          placeholder="Description"
          onChange={e => {
            setDescription(e.target.value);
          }}
          className={err.description ? 'error' : ''}
          ref={refDescriptionInput}
        />
      </LabelAddInputs>
      <InputTags
        tags={tags}
        refTagsInput={refTagsInput}
        deleteArrayTags={deleteArrayTags}
        handleKeyPress={handleKeyPress}
        errTags={err.tags}
      />
      <ContainerAddButtonPost>
        <AddButtonPost onClick={postToolData}>Add tool</AddButtonPost>
      </ContainerAddButtonPost>
    </ContainerAddModal>
  );
}

export default AddModal;
