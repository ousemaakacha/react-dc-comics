import DCLOGO from "../img/dc-logo.png";

export default function Header() {
  return (
    <header>
      <nav class="navbar link-offset-10 navbar-expand-lg ">
        <div class="container">
          <img src={DCLOGO} height="90" />

          <div>
            <ul class="navbar-nav d-flex gap-2 ms-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link " href="#">
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
        </div>
      </nav>
    </header>
  );
}
