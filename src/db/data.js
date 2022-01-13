import wagaroM from "../assets/images/wagaro.jpg";
import wagaro from "../assets/images/wagaro_desktop.jpg";
import kram from "../assets/images/kram.jpg";
import kramM from "../assets/images/kram_mobile.jpg";
import webdev36 from "../assets/images/webdev.jpg";
import webdev36M from "../assets/images/webdev_mobile.jpg";
import webdev36F from "../assets/images/webdev_full.png";
import webdev5 from "../assets/images/webdev5.jpg";
import webdev5M from "../assets/images/webdev5_mobile.jpg";
import webdev5F from "../assets/images/webdev5_full.jpg";
import game from "../assets/images/game.jpg";
import gameM from "../assets/images/game_mobile.jpg";
import flex from "../assets/images/flex.jpg";
import flexM from "../assets/images/flex_mobile.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import portfolioM from "../assets/images/portfolio_mobile.jpg";

const projectsArray = [
  {
    id: "portfolio",
    title: "PORTFOLIO",
    tech: ["REACT", "JAVASCRIPT", "STYLED-COMPONENTS"],
    photo: portfolio,
    photoMobile: portfolioM,
    description: "The page you are browsing right now. I liked the minimalistic design of portfolio template I found on behance (Author: Valeriia Teslia, Link in footer) . I decided to add my own design for all subpages and both Light Theme and second language.",
    additionalDescription: "I used React, React-Router, Styled-Components and some other modules.",
    descriptionPL: "Strona, którą właśnie przeglądasz. Spodobał mi się minimalistyczny wygląd design'u znalezionego na behance (Autor: Valeriia Teslia, Link w stopce). Postanowiłem dodać własny design dla wszystkich podstron oraz jasny motyw oraz drugi język.",
    additionalDescriptionPL: "Wykorzystałem React, React-Router, Styled-Components oraz kilka innych modułów."
},
  {
    id: "wagaro",
    title: "FLIGHTS APP",
    link: "https://wagaro.com",
    tech: ["REACT", "JAVASCRIPT", "NODE/EXPRESS", "MONGODB", "MUI"],
    photo: wagaro,
    photoMobile: wagaroM,
    description:
      "GOAL: create an application that allows the user to get as many results as possible with the least number of clicks (no additional filtering after search). The second task of the application was to download articles from travel-deals websites to database and display them on /results page.",
    additionalDescription:
      "In the future, I want to develop application with new features and change it into commercial product.",
    descriptionPL:
      "CEL: Stworzenie aplikacji dokonującej najlepszego wyszukiwania połączeń za pomocą jak najmniejszej ilości kliknięć (bez koniecznego używania filtrowania po wyszukiwaniu) oraz pobierającej artykuły ze stron podróżniczych do bazy danych, które wyświetlane są na stronie /results.",
    additionalDescriptionPL:
      "W przyszłości chcę rozwinąć aplikację o dodatkowe funkcje, aby stała się produktem komercyjnym"
  },
  {
    id: "webdev_36",
    title: "SHOP TEMPLATE",
    link: "https://krzyzanowskimichal.github.io/WebDevChallange36/",
    sourceCode: "https://github.com/krzyzanowskimichal/WebDevChallange36",
    tech: ["JAVASCRIPT", "HTML", "CSS"],
    photo: webdev36,
    photoMobile: webdev36M,
    fullPagePhoto: webdev36F,
    width: 1920,
    height: 3076,
    description:
      "GOAL: to code the Weekly WebDev Challange 36 template and add working pagination and filters in pure Javascript",
      descriptionPL: "CEL: zakodowanie szablonu Weekly WebDev Challange 36 i dodanie paginacji oraz filtów w czystym Javascript"
  },
  {
    id: "kram_liwocz",
    title: "ONLINE STORE",
    link: "https://kramliwocz.pl",
    tech: ["WORDPRESS", "JAVASCRIPT", "CSS"],
    photo: kram,
    photoMobile: kramM,
    description:
      "GOAL: to create online shop in accordance with the customer's requirements along with its installation on the hosting, full configuration and training for client in the use of Woocommerce and other modules.",
    additionalDescription:
      "The time to complete it was very short. The date of launching the store was very important to the client.",
    descriptionPL: "CEL: stworzenie sklepu internetowego zgodnie z wymaganiami klienta wraz z jego instalacją na serwerze, pełną konfiguracją oraz krótkim szkoleniem z obsługi Woocommerce i innych modułów.",
    additionalDescriptionPL: "Czas na ukończenie projektu był bardzo krótki. Data uruchomienia była kluczowa dla klienta."
  },
  {
    id: "webdev_5",
    title: "PAGE TEMPLATE",
    link: "https://krzyzanowskimichal.github.io/WebDevChallange5",
    sourceCode: "https://github.com/krzyzanowskimichal/WebDevChallange5",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    photo: webdev5,
    photoMobile: webdev5M,
    fullPagePhoto: webdev5F,
    width: 1920,
    height: 6687,
    description: "GOAL: to code Weekly WebDev Challange 5. I did it in 2019 right after finishing my first course on the basics of HTML, CSS and JS",
    descriptionPL: "CEL: zakodowanie szablonu Weekly WebDev Challange 5. Projekt wykonałem w 2019 roku zaraz po ukończeniu pierwszego kursu z podstaw HTML, CSS i JS.",
  },
  {
    id: "colors-game",
    title: "SIMPLE GAME",
    link: "https://krzyzanowskimichal.github.io/simple-color-game/",
    sourceCode: "https://github.com/krzyzanowskimichal/simple-color-game",
    tech: ["JAVASCRIPT", "HTML", "CSS"],
    photo: game,
    photoMobile: gameM,
    description: "Simple color guess game that I made whlie learning Javascript",
    descriptionPL: "Prosta gra w zgadywanie kolorów, którą zrobiłem podczas nauki Javascript",
  },
//   {
//     id: "natours",
//     title: "LANDING PAGE",
//     link: "https://krzyzanowskimichal.github.io/Natours-website-template/",
//     sourceCode: "https://github.com/krzyzanowskimichal/Natours-website-template",
//     tech: ["HTML", "BEM", "SASS"],
//     description: "Website that was made while learning SASS and BEM. ",
//     descriptionPL: "Strona, która została stworzona podczas nauki SASS oraz BEM",
//   },
  {
    id: "mountain_travel",
    title: "FLEXBOX PAGE",
    link: "https://krzyzanowskimichal.github.io/Flexbox-website/",
    sourceCode: "https://github.com/krzyzanowskimichal/Flexbox-website",
    tech: ["HTML", "CSS"],
    photo: flex,
    photoMobile: flexM,
    description: "Website that was made while learning Flexbox.",
    descriptionPL: "Strona, która została stworzona podczas nauki Flexbox'a.",
  },
];

export default projectsArray;

export function getProject(id) {
  return projectsArray.find((project) => project.id === id);
}
