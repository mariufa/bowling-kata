import React from "react";
import { ShortcutButton } from '@sb1/ffe-buttons-react';
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: block;
  margin: 1rem 0;
`;

const CustomShortcutButton = styled(ShortcutButton)`
  width: 9rem;
  display: block;
  margin: 2rem auto;
  text-align: center;
`;

export default function Home() {
  return (
    <HomeContainer>
      <CustomShortcutButton element="a" href="/node">Node</CustomShortcutButton>
      <CustomShortcutButton element="a" href="/java">Java</CustomShortcutButton>
      <CustomShortcutButton element="a" href="/python">Python</CustomShortcutButton>
    </HomeContainer>
  );
};
