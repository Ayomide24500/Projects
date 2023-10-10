import styled from "styled-components";
import { useRef } from "react";
import html2canvas from "html2canvas";

const Footer = () => {
  const print: any = useRef();

  const Handle = async () => {
    const canvas = print.current;
    const want = await html2canvas(canvas);

    const Data = want.toDataURL("image/jpg");
  };

  return (
    <div>
      <Container></Container>
    </div>
  );
};
export default Footer;
const Container = styled.div`
  width: 100%;
  height: 400px;
  background: wheat;
`;
