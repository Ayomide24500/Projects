import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./Dashboardsidebar";
const DashboardLayout = () => {
  return (
    <div>
      <Container>
        <DashboardHeader />
        <DashboardSidebar />

        <Wrapper>
          <Outlet />
        </Wrapper>
      </Container>
    </div>
  );
};
export default DashboardLayout;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  /* background: grey; */
`;
const Wrapper = styled.div`
  width: calc(100% - 270px);
  transition: all 500ms;
  display: flex;
  background: whitesmoke;
  margin-top: 90px;
  overflow-x: hidden;
`;
