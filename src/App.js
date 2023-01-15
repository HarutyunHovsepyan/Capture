import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes, useLocation } from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutUs />} exact>
            </Route>
            <Route path="/work" element={<OurWork />} exact>
            </Route>
            <Route path="/work/:id" element={<MovieDetail />} exact>
            </Route>
            <Route path="/contact" element={<ContactUs />}>
            </Route>
          </Routes>
    </div>
  );
}

export default App;
