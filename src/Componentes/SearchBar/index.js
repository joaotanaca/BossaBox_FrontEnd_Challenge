import React, { useEffect } from 'react';

import { ContainerSearchBar, InputSearchBar, IconSearch } from './styles';

function SearchBar() {
  return (
    <>
      <ContainerSearchBar>
        <IconSearch />
        <InputSearchBar />
      </ContainerSearchBar>
    </>
  );
}

export default SearchBar;
