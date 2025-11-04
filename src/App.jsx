import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <ul class="nav nav-underline justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">
                CHARACTERS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                COMICS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                MOVIES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">TV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                GAMES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                COLLECTIBLES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                VIDEOS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">FANS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                NEWS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default App;
