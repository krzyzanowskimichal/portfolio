import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const StyledParagraph = styled("p")`
  color: ${({ theme }) => theme.text.secondary};
  cursor: pointer;
  margin-top: 7px;
  :hover {
    color: ${({ theme }) => theme.text.primary}
  }
  @media (max-width: 468px) {
    font-size: 0.75rem;
    margin-top: 6.5px;
    letter-spacing: 2.5px;
  }
  @media (max-width: 340px) {
    font-size: 0.7rem;

    margin-top: 4px;
  }
`;
export const Item = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  return (
    <>
      <StyledParagraph onClick={() => navigate("/")}>{t('backHome')} &gt;</StyledParagraph>
    </>
  );
};

const StyledWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  letter-spacing: 4px;
  margin-bottom: 30px;
`;

const StyledHeadline = styled("p")`
  font-size: 1.4em;
  max-width: 60%;
  letter-spacing: 3px;
  @media (max-width: 460px) {
    font-size: 1.1rem;
  }

  @media (max-width: 340px) {
    font-size: 0.9em;
  }
`;

const ReturnTemplate = (props) => {
  return (
    <StyledWrapper>
      <StyledHeadline>{props.name}</StyledHeadline>
      <Item />
    </StyledWrapper>
  );
};

export default ReturnTemplate;
