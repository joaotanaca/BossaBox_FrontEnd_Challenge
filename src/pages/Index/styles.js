import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  color: #170c3a;
`;

export const ContainerTools = styled.div`
  max-width: 800px;
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
`;

export const ToolsTitle = styled.h1`
  font-size: 42px;
`;

export const ToolsSubtitle = styled.h3`
  font-size: 30px;
  margin-top: 0;
`;
