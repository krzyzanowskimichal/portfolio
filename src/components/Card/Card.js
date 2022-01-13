import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTag = styled("p")`
  background: ${(props) => props.filled ? ({ theme }) => theme.background.secondary : "none"};
  color: ${(props) => props.filled ? ({ theme }) => theme.body : ({ theme }) => theme.background.secondary };
  display: inline-block;
`;

const CardWrapper = styled("div")`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border};
  width: 32%;
  height: 160px;
  margin-bottom: 2%;
  @media (max-width: 991px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CardTitle = styled('h4')`
font-size: 19px;
              letter-spacing: 4px;
              color: ${({theme}) => theme.text.primary } ;
`

const CardLink = styled('p')`
font-family: "InconsolataLGCmarkup-Bold";
              color: ${({ theme }) => theme.background.secondary};
              font-size: 14px;
              margin: 10px 0 20px 0;
`

const Card = ({link, title, get, hotkey}) => {
  return (
    <CardWrapper>
      <Link to={link} style={{ textDecoration: "none" }}>
        <div style={{ padding: "16px 0 12px 24px" }}>
          <CardTitle>
            {title}
          </CardTitle>
          <CardLink>
            {get}
          </CardLink>
          <StyledTag  filled style={{ padding: "4px 10px"}}>alt</StyledTag>
          <StyledTag style={{ padding: "10px" }}>+</StyledTag>
          <StyledTag filled style={{ padding: "4px 14px" }}>{hotkey}</StyledTag>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default Card;
