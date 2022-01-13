import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import { getProject } from "../db/data";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import i18next from "i18next";
import LangContext from "../context/lang";
import { ButtonLink } from "../components/Button/Button";

const StyledWrapper = styled("div")`
  display: flex;
  margin-bottom: 20px;
  height: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledMobileImage = styled("img")`
  max-width: 338px;
  max-height: 520px;
  margin-right: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-self: center;
    margin-right: 0;
  }
`;

const StyledDesktopImage = styled("img")`
  width: 55%;
  max-height: 55vh;
  margin-right: 30px;
  cursor: pointer;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 20px;
  @media (max-width: 460px) {
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledDescription = styled("div")`
  flex-shrink: 2;
  text-align: justify;
  color: ${({ theme }) => theme.text.secondary};
  @media (max-width: 767px) {
    margin: 40px 0;
  }
  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

const ProjectPage = (props) => {
  let params = useParams();
  let project = getProject(params.id.substring(1));
  const [windowWidth, setWindowWidth] = React.useState(0);

  const resizeWindow = () => {
    setWindowWidth(document.body.offsetWidth);
  };

  React.useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <MainTemplate name={project.title} {...props}>
      <StyledWrapper>
        {windowWidth > 1024 ? (
          <Gallery>
            <Item
              original={project.fullPagePhoto || project.photo}
              width={project.width || 1600}
              height={project.height || 934}
            >
              {({ ref, open }) => <StyledDesktopImage ref={ref} onClick={open} src={project.photo} />}
            </Item>
          </Gallery>
        ) : (
          <Gallery>
            <Item original={project.photoMobile} width="500" height="916">
              {({ ref, open }) => <StyledMobileImage ref={ref} onClick={open} src={project.photoMobile} />}
            </Item>
          </Gallery>
        )}
        <StyledDescription>
          <ButtonsContainer>
            {project.link && (
              <ButtonLink href={project.link} target="_blank" standard partialyFilled>
                LIVE DEMO &gt;
              </ButtonLink>
            )}
            {project.sourceCode && (
              <ButtonLink href={project.sourceCode} target="_blank" standard partialyFilled>
                SOURCE CODE &gt;
              </ButtonLink>
            )}
          </ButtonsContainer>
          <LangContext.Consumer>
            {(value) => (
              <p style={{ marginTop: "30px" }}>{value === "en" ? project.description : project.descriptionPL}</p>
            )}
          </LangContext.Consumer>

          <LangContext.Consumer>
            {(value) => (
              <p style={{ marginTop: "20px" }}>
                {value === "en" ? project.additionalDescription : project.additionalDescriptionPL}
              </p>
            )}
          </LangContext.Consumer>
        </StyledDescription>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default ProjectPage;
