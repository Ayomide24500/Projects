import { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../Assets/lo.png";

interface iData {
  image: string;
  stack: string;
  phone: string;
}

const Flyer = () => {
  const [userState, setUserState] = useState<Array<iData>>();

  useEffect(() => {
    setUserState(JSON.parse(localStorage.getItem("invited")!));
  }, [userState]);
  let arr: iData | undefined = localStorage[localStorage.length - 1];
  console.log(arr);
  //   const invitedData = JSON.parse(localStorage.getItem("invited") || "[]");
  //   const lastItem = invitedData[invitedData.length - 1];
  //   setUserState(lastItem);
  // }, []);
  return (
    <div>
      <Container>
        <Wrapper key={arr?.phone}>
          <Details>
            <Image src={img} />
            <H1>
              Bridging Your future with <br /> Innovative Technology.
            </H1>
            <P key={arr?.stack}>Full stack: </P>
            <P>Phone: </P>
          </Details>
          <Profile>
            <Img src={arr?.image} />
          </Profile>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Flyer;
const P = styled.div`
  font-size: 19px;
  font-weight: bold;
  padding-top: 29px;
  padding-left: 20px;
`;
const H1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
  padding-left: 20px;
`;
const Image = styled.img`
  width: 90px;
  height: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
const Profile = styled.div`
  width: 26%;
  height: 190px;
  border-radius: 50%;
  /* background: grey; */
  margin-left: -20px;
  border: 15px solid #41777a;
`;
const Details = styled.div`
  width: 59%;
  height: 330px;
  background: wheat;
  margin-right: 19px;
`;
const Wrapper = styled.div`
  width: 40%;
  height: 460px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background: #15393a;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: wheat;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
