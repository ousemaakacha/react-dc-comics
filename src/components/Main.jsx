import COMDIG from "../img/buy-comics-digital-comics.png";
import MERCH from "../img/buy-comics-merchandise.png";
import SHOP from "../img/buy-comics-shop-locator.png";
import SUBS from "../img/buy-comics-subscriptions.png";
import VISA from "../img/buy-dc-power-visa.svg";

export default function Main() {
  return (
    <main>
      <section class="content">
        <div class="container align-middle">
          <p> -- CONTENT GOES HERE --</p>
        </div>
      </section>
      <section class="colLinks">
        <div class="container text-center">
          <div class="row row-cols-5 ">
            <div class="col d-flex align-items-center gap-3 ">
              <img height={60} src={COMDIG} />
              <p>DIGITAL COMICS</p>
            </div>
            <div class="col d-flex align-items-center gap-3">
              <img src={MERCH} height={60} />
              <p>DC MERCHANDISE</p>
            </div>
            <div class="col d-flex align-items-center gap-3">
              <img src={SHOP} height={60} />
              <p>COMIC SHOP LOCATOR</p>
            </div>
            <div class="col d-flex align-items-center gap-3">
              <img src={SUBS} height={60} />
              <p>SUBSCRIPTION</p>
            </div>
            <div class="col d-flex align-items-center gap-3">
              <img src={VISA} height={50} />
              <p>DC POWER VISA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
