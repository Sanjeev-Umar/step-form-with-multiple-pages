import FormContext from "./FormContext";
import { useState } from "react";

const FormState = (props) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  return (
    <FormContext.Provider value={[formState, setFormState]}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
