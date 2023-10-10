import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <p>Login</p>
          <Hold>
            Name
            <Input placeholder="Please Enter Your Name Here" />
          </Hold>
          <Hold>
            Email
            <Input type="text" placeholder="Please Enter Your Email Here" />
          </Hold>

          <Text>
            Don't Have an Account ..?{" "}
            <NavLink to="/SignUp" style={{ textDecoration: "none" }}>
              <span>Signin Then.!!</span>
            </NavLink>
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
const Text = styled.div`
  margin-top: 20px;
  span {
    color: white;
    padding-left: 12px;
  }
`;

const Input = styled.input`
  height: 50px;
  border: none;
  outline: none;
  background-color: white;
  font-size: 20px;
  color: black;
  padding: 10px 10px 10px 10px;
`;

const Hold = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 10px;

  select {
    background-color: white;
    height: 50px;
    color: black;
  }
`;

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  border-radius: 40px;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 23px;
    color: #fff;
    font-weight: bold;
  }
`;

const Container = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
