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

export default function Home({ history }) {
  
  const onClickNode = () => {
    console.log("Clicked node");
    history.push('/bowling');
  }

  return (
    <HomeContainer>
      <CustomShortcutButton onClick={onClickNode}>Node</CustomShortcutButton>
      <CustomShortcutButton>Java</CustomShortcutButton>
      <CustomShortcutButton>Python</CustomShortcutButton>
    </HomeContainer>
  );
};
