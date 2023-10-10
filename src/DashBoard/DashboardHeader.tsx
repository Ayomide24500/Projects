import styled from "styled-components";

const DashboardHeader = () => {
  return (
    <div>
      <Container>Header</Container>
    </div>
  );
};
export default DashboardHeader;
const Container = styled.div`
  background: purple;
  width: calc(100% - 270px);
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px 40px;
  color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: fixed;
  border-bottom: 1px solid #e4e3e3;
  z-index: 3;
`;
