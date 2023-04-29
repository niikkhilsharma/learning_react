import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div
        className={`form-check form-switch bg-${props.mode} text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.changeMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.modeText}
        </label>
      </div>
    </nav>
  );
}

// using propTypes to prevent, entering a prop of different data type than required.
Navbar.propTypes = {
  /*  if you func is taking prop & you're not passing them then at the place where prop is required 
  nothing would be shown(it would be basically like at that place text is missing) */ /* --here-- */
  title: PropTypes.string.isRequired, //if 'isRequired' is applied then you must have to pass a prop incase defaultProps is not present. othwise error would occur
  about: PropTypes.string, //if 'isRequire' is not applied then you won't see an error as you're not making sending prop mandatory. Like in above astrikcs (/* --here--  */)
};

//We can also set default props that would be used incase we didn't send any prop
Navbar.defaultProps = {
  title: "set title",
  about: "About",
};
