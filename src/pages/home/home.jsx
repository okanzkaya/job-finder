import "./home.css";
import Navbar from "../../components/navbar/navbar";
import magnifyglass from "../../assets/magnify-glass.svg";
import jobs from "../../assets/jobs.svg";
import location from "../../assets/location.svg";

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
      <h1>
        Never stop, until you reach your <span id="red-bg">dreams</span>.
      </h1>
      <div className="home-job-search">
        <div className="home-inputs">
          <div className="search-by-title">
            <img src={jobs} />
            <input></input>
          </div>
          <div className="search-by-location">
            <img src={location} />
            <input></input>
          </div>
        </div>
        <div className="home-search">
          <button>
            <img src={magnifyglass} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
