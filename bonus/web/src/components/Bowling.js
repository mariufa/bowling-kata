import React, { useState } from "react";
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
  const [scoreList, setScoreList] = useState("");
  const [score, setScore] = useState(0);

  const onClickCalc = async() => {
    try {
      const response = await fetch(`http://localhost:3001/api/post_score`, {
        method: "post",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({
          scoreList: JSON.parse(scoreList)
        })
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const responseJson = await response.json();
      setScore(responseJson.score);
    } catch (error) {
      console.log(error);
    }
  }

  const onListChange = (event) => {
    setScoreList(event.target.value);
  }

  return (
    <BowlingContainer>
      <Input value={scoreList} onChange={onListChange} placeholder="Score liste"/>
      <CustomPrimaryButton onClick={onClickCalc}>Kalkuler</CustomPrimaryButton>
      <DividerLine/>
      <EmphasizedText>{score}</EmphasizedText>
    </BowlingContainer>
  );
};
