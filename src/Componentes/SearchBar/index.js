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

function SearchBar() {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [remove, setRemove] = useState(true);
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
    setRemove(response);
    showVerification('remove');
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(
        tagsOnly
          ? `tools?tags_like=${query}`
          : query
          ? `tools?q=${query}`
          : 'tools'
      );
      setTools(data);
    }
    fetchData();
  }, [query, tagsOnly, remove]);

  return (
    <>
      <ContainerSearchBar>
        <IconInputSearch />
        <InputSearchBar onChange={e => setQuery(e.target.value)} />
        <ContainerCheckboxSearch onClick={() => setTagsOnly(!tagsOnly)}>
          <CheckboxSearchBar
            label={'search in tags only'}
            tagsOnly={tagsOnly}
          />
        </ContainerCheckboxSearch>
        <ButtonAddSearchBar>
          <IconButtonAdd /> Add
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
              <RemoveIconTool /> remove
            </RemoveTool>
            <DescriptionTool>{tool.description}</DescriptionTool>
            <TagsToolContainer>
              {tool.tags.map((tag, index) => (
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
    </>
  );
}

export default SearchBar;
