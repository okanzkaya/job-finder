import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import magnifyglass from "../../assets/magnify-glass.svg";
import jobs from "../../assets/jobs.svg";
import location from "../../assets/location.svg";
import { jobData, latestJobsData } from "../../temp_data/data";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar homePage={true} />
      <UpperHome />
      <Categories />
      <LatestJobs />
      <Footer />
    </React.Fragment>
  );
};

const UpperHome = () => {
  return (
    <div className="upper-home">
      <h1>
        Never stop, until you <br />
        reach your <span id="red-bg">dreams</span>.
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
          <a href="#" className="category-square" key={item.id}>
            <img src={item.icon} />
            {item.name}
          </a>
        ))}
        <a href="/categories" id="see-much-more" className="category-square">
          <span className="material-symbols-outlined">dialpad</span>
          See much more..
        </a>
      </div>
    </div>
  );
};

const LatestJobs = () => {
  let ids = latestJobsData.map((object) => {
    return object.id;
  });
  let maxId = Math.max(...ids);
  return (
    <div className="latest-jobs-home">
      <h1>Latest jobs</h1>
      <div className="latest-jobs-items-home">
        {latestJobsData.map((jobPosting) =>
          jobPosting.id !== maxId ? (
            <a href="#" className="latest-jobs-item-home" key={jobPosting.id}>
              <div className="comp-details-home">
                <img src={jobPosting.icon} />
                <p>{jobPosting.companyName}</p>
              </div>
              <div className="job-details-home">
                <h2>{jobPosting.title}</h2>
                <p>{jobPosting.description}</p>
              </div>
            </a>
          ) : (
            <div className="latest-jobs-item-home" key={jobPosting.id}>
              <div className="comp-details-home">
                <img id="see-more-last-item-home" src={jobPosting.icon} />
                <p id="see-more-last-item-home">{jobPosting.companyName}</p>
              </div>
              <div className="job-details-home">
                <h2 id="see-more-last-item-home">{jobPosting.title}</h2>
                <p id="see-more-last-item-home">{jobPosting.description}</p>
              </div>
            </div>
          )
        )}
        <div className="blur-the-last-home">
          <button>
            <a href="/jobs">Show More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
