import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
// import DCLOGO from "./img/dc-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main>
        <section class="content">
          <div class="container align-middle">
            <p> -- CONTENT GOES HERE --</p>
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
