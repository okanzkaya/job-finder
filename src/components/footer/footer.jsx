import "./footer.css";
import facebookicon from "../../assets/facebook-icon.svg";
import twittericon from "../../assets/twitter-icon.svg";
import linkedinicon from "../../assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <p>Share your e-mail with us, don’t miss great job opportunities..</p>
        <div className="home-submit-mail">
          <input placeholder="Your e-mail adress.."></input>
          <button>Submit</button>
        </div>
      </div>
      <div className="footer-item">
        <div className="footer-links">
          <div className="footer-link">
            <h1>Help</h1>
            <a href="#">Get support</a>
            <a href="#">Contact us</a>
          </div>
          <div className="footer-link">
            <h1>Privacy</h1>
            <a href="#">Your data</a>
            <a href="#">Privacy policy</a>
          </div>
          <div className="footer-link">
            <h1>Business</h1>
            <a href="#">Collaboration</a>
            <a href="#">Enterprise</a>
            <a href="#">Offers</a>
          </div>
        </div>
      </div>
      <div className="footer-item">
        <div className="social-media-section">
          <div className="social-media-icons">
            <p>
              Follow us on <br /> Social Media!
            </p>
            <a href="#">
              <img src={facebookicon} />
            </a>
            <a href="#">
              <img src={linkedinicon} />
            </a>
            <a href="#">
              <img src={twittericon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
