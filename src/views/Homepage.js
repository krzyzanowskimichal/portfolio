import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Card from "../components/Card/Card";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'
import { useHotkeys } from 'react-hotkeys-hook'

const Homepage = (props) => {
  let navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useHotkeys('alt+a', () => navigate('/profile'));
  useHotkeys('alt+p', () => navigate('/work'));
  useHotkeys('alt+s', () => navigate('/skills'));


  const homepageCards = [
    {
      link: "/profile",
      title: t('aboutMe'),
      get: "GET: /profile",
      hotkey: "A"
    },
    {
      link: "/work",
      title: t('projects'),
      get: "GET: /work",
      hotkey: "P"
    },
    {
      link: "/skills",
      title: "CV",
      get: "GET: /skills",
      hotkey: "S"
    }
  ];

  return (
    <MainTemplate {...props}>
      {homepageCards.map((item) => (
        <Card key={item.title} link={item.link} title={item.title} get={item.get} hotkey={item.hotkey} />
      ))}

    </MainTemplate>
  );
};

export default Homepage;
