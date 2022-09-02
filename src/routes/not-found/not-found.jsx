import "./not-found.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import notfound from "../../assets/notfound.svg";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <NotFoundBody />
      <Footer />
    </div>
  );
};

const NotFoundBody = () => {
  return (
    <div className="not-found-body">
      <img src={notfound} />
      <button><a href="/">Go back home</a></button>
    </div>
  );
};

export default NotFound;
