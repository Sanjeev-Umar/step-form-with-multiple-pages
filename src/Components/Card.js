import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 60%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;
