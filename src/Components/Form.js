import { Outlet } from "react-router";
import Card from "./Card";

import { MainContainer, Title } from "./Styles";

const Form = () => {
  return (
    <MainContainer>
      <Card>
        <Title>SignUp</Title>
        <div>
          <Outlet></Outlet>
        </div>
      </Card>
    </MainContainer>
  );
};

export default Form;
