import React, { useEffect } from 'react';

import { ContainerSearchBar, InputSearchBar, IconSearch } from './styles';
import CheckboxSearchBar from '../CheckboxSearchBar';

function SearchBar() {
  return (
    <>
      <ContainerSearchBar>
        <IconSearch />
        <InputSearchBar />
        <CheckboxSearchBar label={"search in tags only"} />
      </ContainerSearchBar>
    </>
  );
}

export default SearchBar;
