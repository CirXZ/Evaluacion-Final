import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/anime">Anime</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comics">Comics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Logout</NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};
