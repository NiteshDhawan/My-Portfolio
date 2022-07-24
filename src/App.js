import React from "react";
import { useContext } from "react";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import ProductList from "./Components/productList/ProductList";
import Toggle from "./Components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;