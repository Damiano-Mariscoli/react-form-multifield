import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/hero/Hero.jsx";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import Form from "./components/form/Form.jsx";

function App() {
  return (
    <>
      <div className="bg-secondary">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
