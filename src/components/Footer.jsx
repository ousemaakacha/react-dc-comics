import FACEBOOK from "../img/footer-facebook.png";
import PERI from "../img/footer-periscope.png";
import PINT from "../img/footer-pinterest.png";
import TWIT from "../img/footer-twitter.png";
import YT from "../img/footer-youtube.png";
import Dclinks from "./Dclinks";
import FooterLinks from "./Footerlinks";

export default function Footer({ footlinks, dclinks }) {
  return (
    <footer className="bg-dark text-light position-relative">
      <section className="upperFoot">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h6>DC COMICS</h6>
              <ul className="list-unstyled ">
                {footlinks.map((flink) => (
                  <FooterLinks key={flink.id} title={flink.title} />
                ))}
              </ul>
              <h6 className="mt-4">SHOP</h6>
              <ul className="list-unstyled">
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>

            <div className="col-2 ">
              <h6>DC</h6>
              <ul className="list-unstyled ">
                {dclinks.map((dc) => (
                  <Dclinks key={dc.id} title={dc.title} />
                ))}
              </ul>
            </div>

            <div className="col-2">
              <h6>SITES</h6>
              <ul className="list-unstyled">
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
      <section className="container  bottomFoot py-5">
        <div className="row">
          <div className="col-6">
            <button className="btn  btn-primary" type="button">
              SIGN-UP NOW!
            </button>
          </div>

          <div className="col-6 gap-3 d-flex  justify-content-end">
            <a className="align-self-center">FOLLOW US</a>
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
