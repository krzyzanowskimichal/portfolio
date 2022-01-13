import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import { send } from "emailjs-com";
import { useTranslation } from "react-i18next";

const StyledWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: "center";
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

const TextSection = styled("div")`
  width: 50%;
  padding: 0 5%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 20px;
    width: 100%;
    order: 1;
    padding: 0;
  }
`;
const StyledHeading = styled("p")`
  font-family: "InconsolataLGCmarkup-Bold";
  font-size: 1.1rem;
  letter-spacing: 2px;
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

const FormSection = styled("div")`
  width: 50%;
  padding: 0 5%;
  border-right: 2px solid white;
  margin: 10px 0;
  align-self: center;
  @media (max-width: 767px) {
    order: 2;
    width: 100%;
    border-right: none;
    padding: 0;
    margin: 30px 0;
  }
`;
const StyledField = styled(Field)`
  font-family: "InconsolataLGCmarkup";

  width: 100%;
  padding: 12px 12px;
  border: none;
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.primary};
  letter-spacing: 2px;
  text-transform: uppercase;

  ::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }

  :focus {
    outline: none;
  }
`;

const StyledTexField = styled(StyledField)`
  height: 20vh;
  resize: none;
`;

const InputContainer = styled("div")`
  margin-bottom: 20px;
`;

const StyledParagraph = styled("p")`
  margin-bottom: 20px;
  letter-spacing: 2px;
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled("button")`
  background-color: ${({ theme }) => theme.text.primary};
  color: ${({ theme }) => theme.body};
  padding: 8px 12px;
  font-family: "InconsolataLGCmarkup-Bold";
  border: none;
  letter-spacing: 2px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

const Contact = (props) => {
  const { t, i18n } = useTranslation();
  const [success, setSuccess] = React.useState(false);

  return (
    <MainTemplate name={t("contact")} {...props}>
      <StyledWrapper>
        <FormSection>
          <Formik
            initialValues={{ fromName: "", message: "", reply_to: "" }}
            validationSchema={Yup.object({
              fromName: Yup.string().max(15, t("tooLongName")).required(t("required")),
              message: Yup.string().max(200, t("tooLongMessage")).required(t("required")),
              reply_to: Yup.string().email(t("invalidEmail")).required(t("required"))
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSuccess(true);
              setTimeout(() => {
                send("service_gyyndsl", "template_wtpcac6", values, "user_03WU7fSBAeHGijZiB5zq4");
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              resetForm();
              setTimeout(() => setSuccess(false), 5000);
            }}
          >
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <InputContainer>
                <StyledField name="fromName" type="text" placeholder={t("from")} />
                <ErrorMessage name="fromName" />
              </InputContainer>
              <InputContainer>
                <StyledField name="reply_to" type="email" placeholder={t("email")} />
                <ErrorMessage name="reply_to" />
              </InputContainer>
              <InputContainer>
                <StyledTexField component="textarea" name="message" type="text" placeholder={t("message")} />
                <ErrorMessage name="message" />
              </InputContainer>
              {success && <div style={{ marginBottom: "10px" }}>{t("sent")}</div>}
              <StyledButton type="submit">{t("submit")}</StyledButton>
            </Form>
          </Formik>
        </FormSection>
        <TextSection>
          <div>
            <StyledParagraph>{t("contactText")}</StyledParagraph>
            <StyledHeading>{t("phone")}</StyledHeading>
            <p style={{ marginBottom: "16px" }}>+48 503 643 469</p>
            <StyledHeading>{t("myEmail")}</StyledHeading>
            <p>krzyzanowski.michal@hotmail.com</p>
          </div>
        </TextSection>
      </StyledWrapper>
    </MainTemplate>
  );
};

export default Contact;
