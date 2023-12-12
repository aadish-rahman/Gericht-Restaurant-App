import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import {
  AboutUs,
  AiFood,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutUs />
              <SpecialMenu />
              <Chef />
              <Intro />
              <Laurels />
              <Gallery />
              <FindUs />
              <Footer />
            </>
          }
        />
        <Route path="/aifood" element={<AiFood />} />
      </Routes>
    </div>
  </Router>
);

export default App;
