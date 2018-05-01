import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a
                class="nav-item nav-link active "
                href="https://www.instagram.com/embellishchesterfield/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={window.location.origin + "/img/glyph-logo_May2016.png"}
                  alt="instagram"
                  height="24px"
                />
                <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Features
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
