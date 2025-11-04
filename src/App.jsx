import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Main from "./components/Main";
// import DCLOGO from "./img/dc-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Main />
    </>
  );
}

export default App;
