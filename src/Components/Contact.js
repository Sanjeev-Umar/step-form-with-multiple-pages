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

const Contact = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useContext(FormContext);
  const [phone, setPhone] = useState(formState.phone);
  const [phoneError, setPhoneError] = useState("");

  const onPhoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let error = "";

    if (phone.trim().length !== 10 || phone.includes(" ")) {
      error = "Invalid number";
      setPhoneError(error);
    } else {
      error = "";
      setPhoneError(error);
    }

    if (error) {
      return;
    }

    setFormState((prev) => {
      return {
        ...prev,
        phone,
      };
    });
    navigate("/results");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl>
        <CustomLabel htmlFor="contact">Contact</CustomLabel>
        <Input
          type="number"
          id="contact"
          onChange={onPhoneChangeHandler}
        ></Input>
        {phoneError && <ErrorMessage>{phoneError}</ErrorMessage>}
      </FormControl>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Previous
        </Button>
        <Button type="submit">Sumbit</Button>
      </ButtonContainer>
    </form>
  );
};

export default Contact;
