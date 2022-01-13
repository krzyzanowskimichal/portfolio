import styled, { css } from 'styled-components';

export const Button = styled.button`
padding: ${(props) => (props.footerProp ? "3px 8px" : "3px 12px")};
  text-transform: uppercase;
  font-family: "InconsolataLGCmarkup-Bold";
  border: none;
  letter-spacing: 2px;
  font-size: 1rem;
  margin-left: ${(props) => props.footerProp && "17px"};
  cursor: pointer;
  color: ${(props) => (props.standard ? ({ theme }) => theme.text.secondary : ({ theme }) => theme.body)};
  background: ${(props) => {
    if (props.fullyFilled) return ({ theme }) => theme.text.primary;
    else if (props.partialyFilled) return ({ theme }) => theme.background.secondary;
    else return "none";
  }};
  @media (max-width: 468px) {
    font-size: 0.9rem;
  }
  @media (max-width: 360px) {
    margin-left: ${(props) => props.footerProp && "4px"};
  }
`

export const ButtonLink = styled("a")`
 padding: ${(props) => (props.footerProp ? "3px 8px" : "3px 12px")};
  text-transform: uppercase;
  font-family: "InconsolataLGCmarkup-Bold";
  border: none;
  letter-spacing: 2px;
  font-size: 1rem;
  margin-left: ${(props) => props.footerProp && "17px"};
  cursor: pointer;
  color: ${(props) => (props.standard ? ({ theme }) => theme.text.secondary : ({ theme }) => theme.body)};
  background: ${(props) => {
    if (props.fullyFilled) return ({ theme }) => theme.text.primary;
    else if (props.partialyFilled) return ({ theme }) => theme.background.secondary;
    else return "none";
  }};
  @media (max-width: 468px) {
    font-size: 0.9rem;
  }
  @media (max-width: 360px) {
    margin-left: ${(props) => props.footerProp && "4px"};
  }
`;