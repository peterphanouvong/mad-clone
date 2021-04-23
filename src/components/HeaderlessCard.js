import React from "react";
import Draggable from "react-draggable";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  // max-width: 400px;
  border-radius: 20px;
  background: rgba(245, 245, 245, 0.98);
  -webkit-box-shadow: 0px 0px 15px -5px rgba(100, 100, 100, 0.3);
  box-shadow: 0px 0px 15px -5px rgba(100, 100, 100, 0.3);
  overflow: hidden;
`;

const HeaderlessCard = (props) => {
  return (
    <Draggable>
      <Wrapper className={props.className}>{props.children}</Wrapper>
    </Draggable>
  );
};

export default HeaderlessCard;
