import { styled } from "styled-components";
// import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>Ayomide</Logo>
          <NavLink to="/SignUp" style={{ textDecoration: "none" }}>
            <Button>Get Started</Button>
          </NavLink>
        </Main>
      </Container>
    </div>
  );
};
export default Header;
const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 10px 20px;
`;
const Button = styled.button`
  border-radius: 30px;
  padding: 10px 30px;
  background: antiquewhite;
  border: 1px solid darkorange;
  transition: all 360ms;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  height: 60px;
  width: 80%;
  background: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Container = styled.div`
  /* background-color: grey; */
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  margin-top: 20px;
`;
