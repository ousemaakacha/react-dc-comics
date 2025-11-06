import COMDIG from "../img/buy-comics-digital-comics.png";
import MERCH from "../img/buy-comics-merchandise.png";
import SHOP from "../img/buy-comics-shop-locator.png";
import SUBS from "../img/buy-comics-subscriptions.png";
import VISA from "../img/buy-dc-power-visa.svg";
import Card from "./Card.jsx";
import JUMBO from "../img/jumbotron.jpg";
// import comics from "./comics.js";

export default function Main({ comics }) {
  return (
    <main>
      <section className="image-container">
        <img className="image" src={JUMBO} />
      </section>
      <section class="content bg-dark">
        <div class="container align-middle">
          <div>
            <div className="container py-5  text-white">
              <h2 className="mb-4 text-uppercase">Current Series</h2>

              <div className="row">
                {comics.map((comic) => (
                  <Card
                    key={comic.id}
                    thumb={comic.thumb}
                    title={comic.title}
                    series={comic.series}
                    price={comic.price}
                  />
                ))}
              </div>
            </div>
          </div>
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
