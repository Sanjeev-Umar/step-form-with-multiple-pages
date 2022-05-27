import { useNavigate } from "react-router";
import { Button, ButtonContainer } from "./Styles";
import styled from "styled-components";

const ButtonCont = styled(ButtonContainer)`
  width: 100%;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const signUpHandler = () => {
    navigate("/name");
  };

  return (
    <ButtonCont>
      <Button onClick={signUpHandler}>Sign Up</Button>
    </ButtonCont>
  );
};

export default SignUp;
