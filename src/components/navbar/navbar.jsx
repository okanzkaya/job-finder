import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/reducer";

const Navbar = () => {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <nav className="navbar-container">
      <div className="navbar-item" id="logo">
        {value}
      </div>
      <div className="navbar-item">
        <span
          id="burger-menu"
          onClick={() => dispatch(increment())}
          className="material-symbols-outlined"
        >
          menu
        </span>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return <div className="sidebar"></div>;
};
export default Navbar;
