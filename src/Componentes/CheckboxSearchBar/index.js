import React from 'react';

import {
  ContainerCheckbox,
  CheckInput,
  CheckContainer,
  CheckIcon,
} from './styles';

function CheckboxSearchBar({ label, tagsOnly }) {

  return (
    <ContainerCheckbox>
      <CheckContainer>
        <CheckInput checked={tagsOnly} />
        <CheckIcon checked={tagsOnly} />
      </CheckContainer>
      {label}
    </ContainerCheckbox>
  );
}

export default CheckboxSearchBar;
