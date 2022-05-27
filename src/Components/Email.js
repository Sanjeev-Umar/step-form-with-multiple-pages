import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import FormContext from "../Context/FormContext";
import {
  Input,
  CustomLabel,
  Button,
  ButtonContainer,
  FormControl,
  ErrorMessage,
} from "./Styles";
const Email = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useContext(FormContext);
  const [email, setEmail] = useState(formState.email);
  const [emailError, setEmailError] = useState("");

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const nextHandler = () => {
    let error = "";

    if (!email.trim().includes("@") || !email.trim().includes(".")) {
      error = "Please enter a valid email";
      setEmailError(error);
    } else {
      error = "";
      setEmailError(error);
    }

    if (error) {
      return;
    }

    setFormState((prev) => {
      return { ...prev, email };
    });
    navigate("/password");
  };

  return (
    <div>
      <FormControl>
        <CustomLabel htmlFor="email">Email</CustomLabel>
        <Input
          type="email"
          id="email"
          onChange={onEmailChangeHandler}
          value={email}
        ></Input>
        {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      </FormControl>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Previous
        </Button>
        <Button onClick={nextHandler}>Next</Button>
      </ButtonContainer>
    </div>
  );
};

export default Email;
