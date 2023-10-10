import React from "react";
import { styled } from "styled-components";

interface ibutton {
  text?: string;
  bg: string;
}

const Buttonprops: React.FC<ibutton> = ({ text, bg }) => {
  return (
    <div>
      <Btn text={text!} bg={bg}>
        {text}
      </Btn>
    </div>
  );
};
export default Buttonprops;

const Btn = styled.button<{
  text: string;
  bg: string;
}>`
  padding: 20px 28px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  background-color: orange;
  opacity: 0.8;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: brown;
    color: black;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform: translateY(-2px);
  }
`;
