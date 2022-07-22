import React, { Component } from "react";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
          <a className="navbar-brand" href="/NewsReader">
            NewsReader
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/business">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/entertainment">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/health">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/science">
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/sports">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/NewsReader/technology">
                  technology
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
