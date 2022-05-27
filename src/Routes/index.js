import { Routes, Route } from "react-router";
import Form from "../Components/Form";
import Name from "../Components/Name";
import Email from "../Components/Email";
import Password from "../Components/Password";
import Contact from "../Components/Contact";
import Results from "../Components/Results";
import SignUp from "../Components/SIgnUp";
const FormRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form></Form>}>
        <Route index element={<SignUp />}></Route>
        <Route path="name" element={<Name></Name>}></Route>
        <Route path="email" element={<Email></Email>}></Route>
        <Route path="password" element={<Password></Password>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Route>
      <Route path="/results" element={<Results></Results>}></Route>
    </Routes>
  );
};

export default FormRoutes;
