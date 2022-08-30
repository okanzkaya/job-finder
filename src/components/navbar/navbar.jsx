import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-item" id="logo">
        Jobecco
      </div>
      <div className="navbar-item">
        <span id="burger-menu" class="material-symbols-outlined">
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
