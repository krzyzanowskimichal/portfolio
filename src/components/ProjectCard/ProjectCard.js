import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledP = styled("p")`
  display: inline-block;
  padding: 4px 14px;
  background: ${ ({ theme }) => theme.background.secondary };
  color: ${ ({ theme }) => theme.body };
`;

const Tech = (props) => <StyledP>{props.technology}</StyledP>;

const CardWrapper = styled("div")`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.border};
  width: 32%;
  margin-bottom: 2%;
  @media (max-width: 991px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledTitle = styled("h4")`
  font-size: 19px;
  letter-spacing: 4px;
  color: ${({theme}) => theme.text.primary };
`;

const StyledLink = styled("a")`
  font-family: "InconsolataLGCmarkup-Bold";
  color: ${({ theme }) => theme.background.secondary};
  font-size: 15px;
  margin: 10px 0 20px 0;
  display: inline-block;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.text.secondary};

  }
`;

const TechWrapper = styled("div")`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

let mapID = 0

const ProjectCard = ({ id, title, link, tech }) => {
  return (
    <CardWrapper>
      <div style={{ padding: "16px 24px 24px 24px" }}>
      <Link to={`/work:${id}`} style={{ textDecoration: "none" }}>
        <StyledTitle name={title}>{title}</StyledTitle>
        </Link>
        <StyledLink href={link}>{id}</StyledLink>
        <TechWrapper>
          {tech.map((item) => (
            <Tech key={mapID++} technology={item} />
          ))}
        </TechWrapper>
      </div>
    </CardWrapper>
  );
};

export default ProjectCard;
