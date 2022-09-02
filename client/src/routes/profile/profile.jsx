import "./profile.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import userpfp from "../../assets/userpfp.svg";
import info from "../../assets/info.svg";
import { workedCompanies, profileEducation } from "../../temp_data/data";
import React from "react";
import { userProfessions } from "../../temp_data/data";
import { useState } from "react";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileBody />
      <Professions />
      <Footer />
    </div>
  );
};

const ProfileBody = () => {
  const [section, setSection] = useState(true);
  return (
    <div className="user-profile-container">
      <div className="user-profile-element">
        <div className="user-profile-upper">
          <div className="user-profile-upper-item-first">
            <img id="userpfp" src={userpfp} />
          </div>
          <div
            id="user-profile-upper-item-btn"
            className="user-profile-upper-item"
          >
            <h5>John Doe</h5>
            <a>
              Contact info
              <div className="info-parent">
                <img id="info-icon" src={info} />
                <div id="info-text">
                  E-mail: demo@mail.com
                  Location: Universe, Earth
                  Lorem Ipsum Dolor Sit.
                </div>
              </div>
            </a>
            <button>Request resumé</button>
            <button>Send message</button>
          </div>
        </div>
      </div>
      <div className="user-profile-element">
        <div className="user-profile-mid">
          <p id="user-profile-title">
            Full Stack Web Development, ReactJS & NodeJS, AWS Developer
          </p>
          <h4>Bio:</h4>
          <p>
            Hi, my name is John Doe. Lorem ipsum dolor sit amet consectetur
            adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
            ultrices mauris. Maecenas vitae mattis tellus..Lorem ipsum dolor sit
            amet consectetur adipiscing elit Ut et massa mi. Aliquam in
            hendrerit urna.. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus..Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
            massa mi. Aliquam in hendrerit urna <a href="#"> Show more</a>
          </p>
        </div>
      </div>
      <div className="user-profile-element">
        <div className="user-profile-lower">
          <div className="user-profile-interchange">
            <button
              onClick={() => setSection(!section)}
              id={"" + (section ? "user-profile-interchange-selected-btn" : "")}
            >
              Career
            </button>
            <button
              onClick={() => setSection(!section)}
              id={
                "" + (!section ? "user-profile-interchange-selected-btn" : "")
              }
            >
              Academics
            </button>
          </div>
          {section &&
            workedCompanies.map((item) => (
              <React.Fragment key={item.id}>
                <div className="user-profile-visualization">
                  <div>
                    <img src={item.logo} />
                  </div>
                  <div>
                    <h4>{item.compName}</h4>
                    <h6>{item.role}</h6>
                    <p>{item.workedYears}</p>
                  </div>
                  {workedCompanies.length !== item.id && (
                    <React.Fragment>
                      <div></div>
                      <div className="user-profile-vertical-line"></div>
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            ))}{" "}
          {!section &&
            profileEducation.map((item) => (
              <React.Fragment key={item.id}>
                <div className="user-profile-visualization">
                  <div>
                    <img src={item.logo} />
                  </div>
                  <div>
                    <h4>{item.schoolName}</h4>
                    <p>{item.years}</p>
                  </div>
                  {profileEducation.length !== item.id && (
                    <React.Fragment>
                      <div></div>
                      <div className="user-profile-vertical-line"></div>
                    </React.Fragment>
                  )}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

const Professions = () => {
  return (
    <div className="user-profile-professions">
      <h3>Professions & Skills</h3>
      <div className="user-profile-profession-container">
        {userProfessions.map((profession) => (
          <a className="user-profile-profession-box" key={profession}>
            {profession}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
