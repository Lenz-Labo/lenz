import React from "react";

import "./App.css";
import { ResetStyle } from "./styles/reset";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <ResetStyle />
      <Header />
      <Footer />
    </>
  );
}

export default App;
