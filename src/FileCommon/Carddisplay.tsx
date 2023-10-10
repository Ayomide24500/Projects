import styled from "styled-components";
import Data from "./data.json";
import Card from "./Card";
const CardDisplay = () => {
  return (
    <div>
      <Container>
        {Data?.map((el: any) => (
          <Card img={el.img} icon={el.icon1} text={el.text} />
        ))}
      </Container>
    </div>
  );
};
export default CardDisplay;
const Container = styled.div`
  width: 220px;
  height: 90px;
  /* display: flex; */
  /* background: brown; */
`;
