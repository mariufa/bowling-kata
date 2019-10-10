import React from "react";
import { Input } from '@sb1/ffe-form-react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';
import styled from "styled-components";
import { DividerLine } from '@sb1/ffe-core-react';
import { EmphasizedText } from '@sb1/ffe-core-react';

const BowlingContainer = styled.div`
  width: 30rem;
  margin: 1rem auto;
  padding: 2rem; 
`;

const CustomPrimaryButton = styled(PrimaryButton)`
  margin: 1rem 0;
`;

export default function Bowling(){
  return (
    <BowlingContainer>
      <Input placeholder="Score liste"/>
      <CustomPrimaryButton>Kalkuler</CustomPrimaryButton>
      <DividerLine/>
      <EmphasizedText>10</EmphasizedText>
    </BowlingContainer>
  );
};
