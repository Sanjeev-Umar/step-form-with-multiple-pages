import { useContext, useEffect } from "react";
import FormContext from "../Context/FormContext";
import Card from "./Card";
import { MainContainer, Title } from "./Styles";
import styled from "styled-components";
import { useNavigate } from "react-router";

const ResultsContainer = styled.div`
  display: flex;
`;

const KeyContainer = styled.div`
  width: 40%;
`;
const ValueContainer = styled.div`
  width: 50%;
`;

const TextStyle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
`;
const Results = () => {
  const [formState] = useContext(FormContext);
  const navigate = useNavigate();

  useEffect(() => {
    Object.values(formState).forEach((val) => {
      if (!val) {
        navigate("/");
      }
    });
  });

  return (
    <MainContainer>
      <Card>
        <Title>Results</Title>
        <ResultsContainer>
          <KeyContainer>
            <TextStyle>First Name</TextStyle>
            <TextStyle>Last Name</TextStyle>
            <TextStyle>Email</TextStyle>
            <TextStyle>Phone</TextStyle>
          </KeyContainer>
          <ValueContainer>
            <TextStyle>{formState.firstName}</TextStyle>
            <TextStyle>{formState.lastName}</TextStyle>
            <TextStyle>{formState.email}</TextStyle>
            <TextStyle>{formState.phone}</TextStyle>
          </ValueContainer>
        </ResultsContainer>
      </Card>
    </MainContainer>
  );
};

export default Results;
