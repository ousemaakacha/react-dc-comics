import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
// import DCLOGO from "./img/dc-logo.png";
// import FACEBOOK from "./img/footer-facebook.png";
// import PERI from "./img/footer-periscope.png";
// import PINT from "./img/footer-pinterest.png";
// import TWIT from "./img/footer-twitter.png";
// import YT from "./img/footer-youtube.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default App;
