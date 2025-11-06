import DCLOGO from "../img/dc-logo.png";
import NavLinks from "./Navlinks";

export default function Header({ menu }) {
  return (
    <header>
      <nav className="navbar link-offset-10 navbar-expand-lg ">
        <div className="container">
          <img src={DCLOGO} height="90" />

          <ul class="navbar-nav d-flex gap-2 ms-auto mb-2 mb-lg-0">
            {menu.map((item) => (
              <NavLinks key={item.id} title={item.title} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
