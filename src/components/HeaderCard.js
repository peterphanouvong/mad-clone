import React from "react";
import Draggable from "react-draggable";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: 400px;
  background: rgba(245, 245, 245, 0.98);
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(100, 100, 100, 0.3);
  box-shadow: 0px 0px 15px -5px rgba(100, 100, 100, 0.3);
  overflow: hidden;
`;

const Header = styled.div`
  background: rgba(239, 238, 238, 0.98);
  color: #90908f;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px 20px 0 0;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Content = styled.div`
  // padding: 20px;
  border-radius: 0 0 20px 20px;
`;

const HeaderCard = (props) => {
  const { header, className } = props;

  return (
    <Draggable>
      <Wrapper>
        <Header>{header}</Header>
        <Content className={className}>{props.children}</Content>
      </Wrapper>
    </Draggable>
  );
};

export default HeaderCard;
