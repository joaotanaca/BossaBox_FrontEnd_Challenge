import React from 'react';

import { Container, ContainerTools, ToolsTitle, ToolsSubtitle } from './styles';
import Search from '../../Componentes/SearchBar';

const Index = () => (
  <Container>
    <ContainerTools>
      <ToolsTitle>VUTTR</ToolsTitle>
      <ToolsSubtitle>Very Useful Tools to Remember</ToolsSubtitle>
      <Search />
    </ContainerTools>
  </Container>
);

export default Index;
