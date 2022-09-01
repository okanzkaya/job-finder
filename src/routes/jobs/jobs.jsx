import "./jobs.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import React, { useRef } from "react";
import { latestJobsData } from "../../temp_data/data";
import { toggleJobsSideBar } from "../../store/reducer";
import postjob from "../../assets/postjob.svg";
import savedjobs from "../../assets/savedjobs.svg";
import resume from "../../assets/resume.svg";
import history from "../../assets/history.svg";
import alerts from "../../assets/alerts.svg";
import betterrecommendations from "../../assets/better-recommendations.svg";
import threedots from "../../assets/threedots.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const latestJobsDataNew = latestJobsData.slice(0, 5);

const Jobs = () => {
  return (
    <div className="jobs">
      <Navbar />
      <JobsSidemenu />
      <JobsSideBar />
      <RecommendedJobs />
      <LatestJobs />
      <CloseJobs />
      <Footer />
    </div>
  );
};

let ids = latestJobsData.map((object) => {
  return object.id;
});
let maxId = Math.max(...ids);

const RecommendedJobs = () => {
  return (
    <div className="recommendedJobs">
      <h1>Recommended for you</h1>
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
      )}{" "}
      <div className="blur-the-last-home">
        <button>
          <a href="#">Show More</a>
        </button>
      </div>
    </div>
  );
};

const jobsSidebarItems = [
  { icon: savedjobs, text: "Saved jobs" },
  { icon: history, text: "History" },
  { icon: resume, text: "Your resumé" },
  { icon: alerts, text: "Job alerts" },
  { icon: betterrecommendations, text: "Recommendations" },
];

jobsSidebarItems.forEach((item, i) => {
  item.id = i + 1;
});

function ClickDetector(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        ref.current.className == "jobs-sidebar-active"
      ) {
        dispatch(toggleJobsSideBar());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const JobsSideBar = () => {
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const jobsSideBar = useSelector((state) => state.jobsSidebar);
  ClickDetector(wrapperRef);
  return (
    <div className="jobs-sidebar-elements">
      <div className="jobs-sidebar-three-dots">
        <a onClick={() => dispatch(toggleJobsSideBar())}>
          <img src={threedots} />
        </a>
      </div>
      <div
        className={"jobs-sidebar" + (jobsSideBar ? "-active" : "")}
        ref={wrapperRef}
      >
        <div className="jobs-sidebar-item">
          <p id="hiring">Are you hiring?</p>
          <button>
            <img src={postjob} /> Post a job
          </button>
        </div>

        <div className="jobs-sidebar-item">
          {jobsSidebarItems.map((item) => (
            <div className="jobs-sidebar-menu" key={item.id}>
              <img src={item.icon} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const JobsSidemenu = () => {
  return (
    <div className="jobs-sidemenu">
      <div className="jobs-sidemenu-item">
        <p id="hiring">Are you hiring?</p>
        <button>
          <img src={postjob} /> Post a job
        </button>
      </div>
      <div className="jobs-sidemenu-item">
        {jobsSidebarItems.map((item) => (
          <div className="jobs-sidebar-menu" key={item.id}>
            <img src={item.icon} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="jobs-sidemenu-item">
        Need{" "}
        <a href="#" id="help">
          Help?
        </a>
      </div>
    </div>
  );
};

const LatestJobs = () => {
  return (
    <div className="latest-jobs">
      <h1>Latest jobs</h1>
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
      )}{" "}
      <div className="blur-the-last-home">
        <button>
          <a href="#">Show More</a>
        </button>
      </div>
    </div>
  );
};

const CloseJobs = () => {
  return (
    <div className="close-jobs">
      <h1>Close to your location</h1>
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
          <a href="#">Show More</a>
        </button>
      </div>
    </div>
  );
};

export default Jobs;
