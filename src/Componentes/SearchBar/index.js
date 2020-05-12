import React, { useEffect, useState } from 'react';
import api from '../../api';
import Modal from '../Modal';

import {
  ContainerSearchBar,
  InputSearchBar,
  IconInputSearch,
  ContainerCheckboxSearch,
  ButtonAddSearchBar,
  IconButtonAdd,
  ContainerTools,
  ContainerTool,
  TitleTool,
  DescriptionTool,
  TagsToolContainer,
  TagTool,
  RemoveTool,
  RemoveIconTool,
  CloseIconModal,
} from './styles';
import CheckboxSearchBar from '../CheckboxSearchBar';
import RemoveModal from './RemoveModal';
import AddModal from './AddModal';

function SearchBar() {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [httpResponse, setHttpResponse] = useState();
  const [removeId, setRemoveId] = useState('');
  const [removeName, setRemoveName] = useState('');

  function showVerification(show) {
    if (show === 'remove') {
      setShowRemove(!showRemove);
    } else {
      setShowAdd(!showAdd);
    }
  }

  async function removeTool() {
    const response = await api.delete(`tools/${removeId}`);
    setHttpResponse(response);
    showVerification('remove');
  }

  async function addTool(body) {
    const response = await api.post(`tools`, body);
    setHttpResponse(response);
    showVerification('add');
    return response;
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(
        // eslint-disable-next-line no-nested-ternary
        tagsOnly ? `tools?tags=${query}` : query ? `tools?q=${query}` : 'tools'
      );
      setTools(data);
    }
    fetchData();
  }, [query, tagsOnly, httpResponse]);

  return (
    <>
      <ContainerSearchBar>
        <IconInputSearch />
        <InputSearchBar onChange={e => setQuery(e.target.value)} />
        <ContainerCheckboxSearch onClick={() => setTagsOnly(!tagsOnly)}>
          <CheckboxSearchBar label="search in tags only" tagsOnly={tagsOnly} />
        </ContainerCheckboxSearch>
        <ButtonAddSearchBar
          onClick={() => {
            setShowAdd(!showAdd);
          }}
        >
          <IconButtonAdd />
          Add
        </ButtonAddSearchBar>
      </ContainerSearchBar>
      <ContainerTools>
        {tools.map(tool => (
          <ContainerTool key={tool.id}>
            <TitleTool href={tool.link}>{tool.title}</TitleTool>
            <RemoveTool
              onClick={() => {
                showVerification('remove');
                setRemoveName(tool.title);
                setRemoveId(tool.id);
              }}
            >
              <RemoveIconTool />
              remove
            </RemoveTool>
            <DescriptionTool>{tool.description}</DescriptionTool>
            <TagsToolContainer>
              {tool.tags.map((tag, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TagTool key={index}>#{tag}</TagTool>
              ))}
            </TagsToolContainer>
          </ContainerTool>
        ))}
      </ContainerTools>
      <Modal show={showRemove}>
        <CloseIconModal
          onClick={() => {
            showVerification('remove');
          }}
        />
        <RemoveModal removeName={removeName} removeTool={removeTool} />
      </Modal>
      <Modal show={showAdd}>
        <CloseIconModal
          onClick={() => {
            showVerification('add');
          }}
        />
        <AddModal addTool={addTool} />
      </Modal>
    </>
  );
}

export default SearchBar;
