import { IconType } from "react-icons/lib";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
// import "../static/Style.css";
type iCard = {
  img: string;
  text: String;
  icon?: IconType;
};
const Card = ({ img, text }: iCard) => {
  const [show, setShow] = useState(false);

  const Dropdown = () => {
    setShow(show);
  };
  return (
    <div>
      <Container>
        <Image src={img} />
        <Holder>
          <TextHolder>{text}</TextHolder>
          <Hold>
            <IoIosArrowForward
              onClick={Dropdown}
              style={{ cursor: "pointer" }}
            />
          </Hold>
        </Holder>
        {show ? <Wrapper></Wrapper> : null}
      </Container>
    </div>
  );
};
export default Card;
const Wrapper = styled.div`
  width: 50%;
  height: 100px;
  background: black;
`;
const Hold = styled.div`
  width: 25%;
  height: 40px;
  /* background: pink; */
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const TextHolder = styled.div`
  width: 70%;
  height: 40px;
  /* background: grey; */
  font-weight: bold;
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Holder = styled.div`
  width: 70%;
  height: 60px;
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 10%;
  height: 20px;
  /* background: #fff; */
  margin-left: 11px;
`;
const Container = styled.div`
  width: 220px;
  /* height: 500px; */
  /* background: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
