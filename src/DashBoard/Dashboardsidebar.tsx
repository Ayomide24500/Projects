import styled from "styled-components";
// import { BiHomeAlt } from "react-icons/bi";
import CardDisplay from "../FileCommon/Carddisplay";
import img from "../Assets/logo.png";
const DashboardSidebar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image src={img} />
          <Box>
            <CardDisplay />
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};
export default DashboardSidebar;
const Box = styled.div`
  width: 230px;
  height: 100%;
  /* background-color: green; */
`;
const Image = styled.img`
  height: 60px;
  width: 220px;
  /* background: orange; */
`;
const Wrapper = styled.div`
  height: 90%;
`;
const Container = styled.div`
  width: 270px;
  height: 100vh;
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 500ms;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  z-index: 3;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  /* &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  } */
`;
