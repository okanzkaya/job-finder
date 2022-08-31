import "./home.css";
import Navbar from "../../components/navbar/navbar";
import magnifyglass from "../../assets/magnify-glass.svg";
import jobs from "../../assets/jobs.svg";
import location from "../../assets/location.svg";
import { jobData } from "../../temp_data/data";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <UpperHome />
      <Categories />
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
            <input type="text" placeholder="Job Title.."></input>
          </div>
          <div className="search-by-location">
            <img src={location} />
            <input type="text" placeholder="City or Postal Code"></input>
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

const Categories = () => {
  return (
    <div className="category-choose-home">
      <h1>Choose your category</h1>
      <div className="category-squares">
        {jobData.map((item) => (
          <a href="#" className="category-square">
            <img src={item.icon} />
            {item.name}
          </a>
        ))}
        <a href="#" id="see-much-more" className="category-square">
          <span className="material-symbols-outlined">dialpad</span>
          See much more..
        </a>
      </div>
    </div>
  );
};

export default Home;
