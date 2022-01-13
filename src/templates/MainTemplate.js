import React from "react";
import styled, { keyframes } from "styled-components";
import ReturnTemplate from "./ReturnTemplate";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LangContext from "../context/lang";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themes/GlobalStyles";
import { lightTheme, darkTheme } from "../themes/Themes";
import { Button, ButtonLink } from "../components/Button/Button";

const StyledWrapper = styled("div")`
  padding: 42px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 468px) {
    padding: 18px;
  }
`;

const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  flex-grow: 0;
`;

const TitleContainer = styled("div")`
  @media (max-width: 468px) {
    /* font-size: 1rem; */
    max-width: 75%;
  }
`;

const StyledTitle = styled("h1")`
  font-size: 1.25rem;
  letter-spacing: 4px;
  margin-bottom: 16px;
`;

const StyledGrid = styled("div")`
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  align-content: start;
  @media (max-width: 800px) {
    gap: 1rem;
  }
`;

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`;

const blinkCaret = keyframes`
    from { border-color: transparent }
    50% { border-color: orange }
    to { border-color: transparent }
`;

const Typewriter = styled("h2")`
  display: inline-block;
  overflow: hidden;
  border-right: 0.15em solid ${({ theme }) => theme.text.primary};
  white-space: nowrap;
  margin: 0 auto;
  font-size: 0.9rem;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.text.secondary};
  animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  @media (max-width: 468px) {
    font-size: 0.8rem;
  }
`;

const MenuContainer = styled("div")`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;

const StyledFooter = styled("div")`
  margin-top: 30px;
`;

// const StyledButton = styled("button")`
//   padding: ${(props) => (props.footerProp ? "3px 8px" : "3px 12px")};
//   text-transform: uppercase;
//   font-family: "InconsolataLGCmarkup-Bold";
//   border: none;
//   letter-spacing: 2px;
//   font-size: 1rem;
//   margin-left: ${(props) => props.footerProp && "17px"};
//   cursor: pointer;
//   color: ${(props) => (props.standard ? ({ theme }) => theme.text.secondary : ({ theme }) => theme.body)};
//   background: ${(props) => {
//     if (props.fullyFilled) return ({ theme }) => theme.text.primary;
//     else if (props.partialyFilled) return ({ theme }) => theme.background.secondary;
//     else return "none";
//   }};
//   @media (max-width: 468px) {
//     font-size: 0.9rem;
//   }
//   @media (max-width: 360px) {
//     margin-left: ${(props) => props.footerProp && "4px"};
//   }
// `;

const CreditText = styled('p')`
    color: ${({theme}) => theme.text.secondary};
    font-size: 12px;
    margin-top: 20px;
`

const MainTemplate = ({ children, hideTitle, name }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = React.useState(localStorage.getItem("i18nextLng") || "en");

  const handleLanguageChange = () => {
    setLanguage(language === "pl" ? "en" : "pl");
  };

  React.useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  //   const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  //   if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <StyledWrapper>
          <StyledHeader>
            <TitleContainer>
              <StyledTitle>MICHAL KRZYZANOWSKI</StyledTitle>
              <Typewriter>JUNIOR WEB DEVELOPER</Typewriter>
            </TitleContainer>
            <MenuContainer>
              <Button fullyFilled onClick={handleLanguageChange}>
                {language}
              </Button>
              <Button standard onClick={themeToggler} style={{ padding: "3px 0" }}>
                {theme}
              </Button>
            </MenuContainer>
          </StyledHeader>
          <div style={{ flex: 2 }}>
            {!hideTitle && <ReturnTemplate name={name} />}
            <StyledGrid>
              <LangContext.Provider value={language}> {children} </LangContext.Provider>
            </StyledGrid>
          </div>
          <StyledFooter>
            <Link to="/contact">
              <Button partialyFilled standard style={{ padding: "4px 10px" }}>
                {t("contact")}
              </Button>
            </Link>
            <ButtonLink href="https://www.linkedin.com/in/krzyzanowskimichal/" target="_blank" standard footerProp>
              LINKEDIN
            </ButtonLink>
            <ButtonLink href="https://github.com/krzyzanowskimichal/" target="_blank" standard footerProp>
              GITHUB
            </ButtonLink>
            <CreditText>
              <a href="https://www.behance.net/gallery/40632025/Website-portfolio-for-Developer" rel="noreferrer" target="_blank">Template</a> by 
              <a href="https://www.behance.net/webneko" rel="noreferrer" target="_blank"> Valeriia Teslia</a> is licensed under CC BY-NC-ND 4.0.
            </CreditText>
          </StyledFooter>
        </StyledWrapper>
      </>
    </ThemeProvider>
  );
};

export default MainTemplate;
