import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  let headStyle={
    fontWeight: 'bolder',
    fontFamily: 'cursive',
    fontSize: 'xx-large',
    color: props.mode==='light'?'#102234':'#79bcfd'
  }
  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode==='light'?'secondary':'dark'}`} style={{border:'2px solid white'}}>
        <div className="container-fluid">
          <a className="navbar-brand" style={headStyle} href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle text-${props.mode==='light'?'dark':'light'}`}
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.more}
                </a>
                <ul
                  className={`dropdown-menu bg-${props.mode==='dark'?'secondary':'light'} `}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className={`dropdown-item text-${props.mode==='light'?'dark':'light'}` } href="/about">
                      {props.about}
                    </a>
                  </li>
                </ul>
              </li>
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  <p>{`Enable ${props.mode==='light'?'Dark':'Light'}`} mode</p>
                </label>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  about: PropTypes.string,
  location: PropTypes.string,
  contact: PropTypes.number,
};
Navbar.defaultProps = {
  title: "Set Title ",
  more: "Set More",
  about: "Set About",
  location: "Set location",
  contact: "Enter number",
};
