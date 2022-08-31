import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../../store/reducer";
import home from "../../assets/home.svg";
import categories from "../../assets/categories.svg";
import info from "../../assets/info.svg";
import jobs from "../../assets/jobs.svg";
import personavatar from "../../assets/person-avatar.svg";
import upload from "../../assets/upload.svg";
import { useEffect, useRef } from "react";

const Navbar = (props) => {
  const dispatch = useDispatch();

  return (
    <nav
      className="navbar-container"
      style={{ backgroundColor: props.homePage === true ? "#E0E0E0" : "" }}
    >
      <div href="#" className="navbar-item">
        <a href="#" id="logo">
          Jobecco
        </a>
      </div>
      <div className="navbar-item">
        <span
          id="burger-menu"
          onClick={() => dispatch(toggleNav())}
          className="material-symbols-outlined"
        >
          menu
        </span>
        <ul className="desktop-navbar-list">
          <a href="/">Home</a>
          <a href="jobs">Jobs</a>
          <a href="#">Categories</a>
          <a href="#">About us</a>
          <a href="#">
            <img src={upload} />
            Upload resumé
          </a>
          <a href="#">My profile</a>
        </ul>
      </div>
      <Sidebar />
    </nav>
  );
};

function ClickDetector(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        ref.current.className == "sidebar-container-active"
      ) {
        dispatch(toggleNav());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Sidebar = () => {
  const sideBar = useSelector((state) => state.sidebar);
  const wrapperRef = useRef(null);
  ClickDetector(wrapperRef);
  return (
    <div
      className={"sidebar-container" + (sideBar ? "-active" : "")}
      ref={wrapperRef}
    >
      <div className="sidebar-item">
        <a href="#" id="sidebar-logo">
          Jobecco
        </a>
      </div>
      <div className="sidebar-item">
        <div className="menu-item">
          <img src={home} />
          <a href="/">Home</a>
        </div>
        <div className="menu-item">
          <img src={jobs} />
          <a href="/jobs">Jobs</a>
        </div>
        <div className="menu-item">
          <img src={categories} />
          <a href="#">Categories</a>
        </div>
        <div className="menu-item">
          <img src={info} />
          <a href="#">About us</a>
        </div>
        <div className="menu-item">
          <img src={upload} />
          <a href="#">Upload resumé</a>
        </div>
        <div className="menu-item">
          <img src={personavatar} />
          <a href="#">My profile</a>
        </div>
      </div>
      <div className="sidebar-item">
        Need {""}
        <a href="#" id="help">
          Help?
        </a>
      </div>
      <div className="sidebar-item"></div>
    </div>
  );
};
export default Navbar;
