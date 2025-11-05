import FACEBOOK from "../img/footer-facebook.png";
import PERI from "../img/footer-periscope.png";
import PINT from "../img/footer-pinterest.png";
import TWIT from "../img/footer-twitter.png";
import YT from "../img/footer-youtube.png";

export default function Footer() {
  return (
    <footer class="bg-dark text-light position-relative">
      <section class="upperFoot">
        <div class="container">
          <div class="row">
            <div class="col md-2" md={2}>
              <h6>DC COMICS</h6>
              <ul class="list-unstyled ">
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <h6 class="mt-4">SHOP</h6>
              <ul class="list-unstyled">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>

            <div class="col md-2" md={2}>
              <h6>DC</h6>
              <ul class="list-unstyled ">
                <li>Terms Of Use</li>
                <li>Privacy Policy (New)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Ratings</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div class="col md-2" md={2}>
              <h6>SITES</h6>
              <ul class="list-unstyled">
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="container  bottomFoot py-5">
        <div class="row">
          <div class="col-6">
            <button class="btn  btn-primary" type="button">
              SIGN-UP NOW!
            </button>
          </div>

          <div class="col-6 gap-3 d-flex  justify-content-end">
            <a class="align-self-center ">FOLLOW US</a>
            <img src={FACEBOOK} />
            <img src={PERI} />
            <img src={PINT} />
            <img src={TWIT} />
            <img src={YT} />
          </div>
        </div>
      </section>
    </footer>
  );
}
