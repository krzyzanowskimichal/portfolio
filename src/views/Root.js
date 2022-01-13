import React, { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import Skills from "./Skills";


const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Root = () => {
  

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Routes>
          <Route
            path="/"
            element={<Homepage hideTitle={true} />}
          />
          <Route path="/profile" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/work" element={<Projects />} />
          <Route path="/work:id" element={<ProjectPage  />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Root;
