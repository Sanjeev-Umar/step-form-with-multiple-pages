import styled from "styled-components";

export const Input = styled.input`
  /* border-color: #bbb; */
  padding: 5px 7px;
  display: block;
  border-radius: 5px;
  width: 90%;
`;

export const CustomLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 9px 25px;
  background: #333;
  color: #fff;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: #333;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.small`
  color: #ff3333;
  font-size: 12px;
`;

export const FormControl = styled.div`
  margin-bottom: 20px;
`;
