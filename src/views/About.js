import React from "react";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import photo from "../assets/images/photo.jpg";
import { useTranslation } from "react-i18next";


const StyledWrapper = styled("div")`
  margin: 20px 0;
  display: flex;
  gap: 42px;
  @media (max-width: 768px) {
      flex-direction: column;
  }
`;

const StyledImage = styled("img")`
  max-width: 338px;
  max-height: 520px;
  @media (max-width: 768px) {
      align-self: center;
  }
  @media (max-width: 460px) {
        max-width: 250px;
  }
`;

const StyledParagraph = styled("p")`
  line-height: 1.4rem;
  text-align: justify;
  margin-bottom: 10px;
`;

const About = (props) => {
    const { t, i18n } = useTranslation();

  return (
    <MainTemplate name="About" {...props} >
      <StyledWrapper>
        <StyledImage src={photo} alt="Michal" />
        <div>
          <StyledParagraph>{t('aboutText_1')}</StyledParagraph>
          <StyledParagraph>
           {t('aboutText_2')}
          </StyledParagraph>
          <StyledParagraph>
          {t('aboutText_3')}
          </StyledParagraph>
          <StyledParagraph>
          {t('aboutText_4')}
          </StyledParagraph>
          <StyledParagraph>{t('aboutText_5')}</StyledParagraph>
        </div>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default About;
