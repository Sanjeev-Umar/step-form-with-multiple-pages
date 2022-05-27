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
const Password = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useContext(FormContext);
  const [password, setPassword] = useState({
    password: formState.password,
    confirmPassword: formState.password,
  });
  const [passwordError, setPasswordError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onPasswordChangeHandler = (e) => {
    setPassword((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  const onConfirmPasswordChangeHandler = (e) => {
    setPassword((prev) => {
      return { ...prev, confirmPassword: e.target.value };
    });
  };
  const nextHandler = () => {
    const errorObj = {
      password: "",
      confirmPassword: "",
    };

    if (password.password.trim().length < 6) {
      errorObj.password = "Password Should be 6 or more characters";

      setPasswordError((prev) => {
        return { ...prev, password: errorObj.password };
      });
    } else {
      errorObj.password = "";

      setPasswordError((prev) => {
        return { ...prev, password: errorObj.password };
      });
    }
    if (password.confirmPassword !== password.password) {
      errorObj.confirmPassword = "Password Does not match";

      setPasswordError((prev) => {
        return { ...prev, confirmPassword: errorObj.confirmPassword };
      });
    } else {
      errorObj.confirmPassword = "";

      setPasswordError((prev) => {
        return { ...prev, confirmPassword: errorObj.confirmPassword };
      });
    }

    if (errorObj.password || errorObj.confirmPassword) {
      return;
    }

    setFormState((prev) => {
      return { ...prev, password: password.password };
    });
    navigate("/contact");
  };
  return (
    <div>
      <FormControl>
        <CustomLabel htmlFor="password">Password</CustomLabel>
        <Input
          type="password"
          id="password"
          onChange={onPasswordChangeHandler}
          value={password.password}
        ></Input>
        {passwordError.password && (
          <ErrorMessage>{passwordError.password}</ErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <CustomLabel htmlFor="confirmPassword">Confirm Password</CustomLabel>
        <Input
          type="password"
          id="confirmPassword"
          onChange={onConfirmPasswordChangeHandler}
          value={password.confirmPassword}
        ></Input>
        {passwordError.confirmPassword && (
          <ErrorMessage>{passwordError.confirmPassword}</ErrorMessage>
        )}
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

export default Password;
