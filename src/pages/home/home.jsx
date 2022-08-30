import "./home.css";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <UpperHome />
    </div>
  );
};

const UpperHome = () => {
  return (
    <div className="upper-home">
      <div></div>
    </div>
  );
};

export default Home;
