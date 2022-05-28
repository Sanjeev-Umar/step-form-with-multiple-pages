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
const Name = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useContext(FormContext);
  const [name, setName] = useState({
    firstName: formState.firstName,
    lastName: formState.lastName,
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
  });

  const onFirstNameChangeHandler = (e) => {
    setName((prev) => {
      return { ...prev, firstName: e.target.value };
    });
  };

  const onLastNameChangeHandler = (e) => {
    setName((prev) => {
      return { ...prev, lastName: e.target.value };
    });
  };

  const nextHandler = () => {
    const errorObj = {
      firstName: "",
      lastName: "",
    };

    if (name.firstName.trim().length < 3) {
      errorObj.firstName = "First Name should be grater the 2 letters";
      setError((prev) => {
        return { ...prev, firstName: errorObj.firstName };
      });
    } else {
      errorObj.firstName = "";
      setError((prev) => {
        return { ...prev, firstName: errorObj.firstName };
      });
    }

    if (name.lastName.trim().length < 3) {
      errorObj.lastName = "Last Name should be grater the 2 letters";

      setError((prev) => {
        return { ...prev, lastName: errorObj.lastName };
      });
    } else {
      errorObj.lastName = "";

      setError((prev) => {
        return { ...prev, lastName: errorObj.lastName };
      });
    }

    if (errorObj.firstName || errorObj.lastName) {
      return;
    }

    setFormState((prev) => {
      return { ...prev, firstName: name.firstName, lastName: name.lastName };
    });

    navigate("/email");
  };

  return (
    <div className="">
      <FormControl>
        <CustomLabel htmlFor="firstName">First Name</CustomLabel>
        <Input
          type="text"
          id="firstName"
          onChange={onFirstNameChangeHandler}
          value={name.firstName}
        ></Input>
        {error.firstName && <ErrorMessage>{error.firstName}</ErrorMessage>}
      </FormControl>
      <FormControl>
        <CustomLabel htmlFor="lastName">Last Name</CustomLabel>
        <Input
          type="text"
          id="lastName"
          onChange={onLastNameChangeHandler}
          value={name.lastName}
        ></Input>
        {error.lastName && <ErrorMessage>{error.lastName}</ErrorMessage>}
      </FormControl>
      <ButtonContainer>
        <Button onClick={nextHandler}>Next</Button>
      </ButtonContainer>
    </div>
  );
};

export default Name;
