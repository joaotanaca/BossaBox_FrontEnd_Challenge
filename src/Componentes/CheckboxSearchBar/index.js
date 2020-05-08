import React, { useState } from 'react';

import {
  ContainerCheckbox,
  CheckInput,
  CheckContainer,
  CheckIcon,
} from './styles';

function CheckboxSearchBar({ label }) {
  const [check, setCheck] = useState(false);

  return (
    <ContainerCheckbox>
      <CheckContainer
        onClick={() => {
          setCheck(!check);
        }}
      >
        <CheckInput checked={check} />
        <CheckIcon checked={check} />
      </CheckContainer>
      {label}
    </ContainerCheckbox>
  );
}

export default CheckboxSearchBar;
