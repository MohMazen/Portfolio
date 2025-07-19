import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div>
          <div
              className="navbar-container d-flex flex-column flex-shrink-0"
              style={{ width: '4.5rem' }}
          >
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li className="nav-item">
                <a
                    href="/"
                    className="nav-link py-3 rounded-0"
                    aria-current="page"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Home"
                    data-bs-original-title="Home"
                >
                  <i className="bi bi-house-door" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
              <li>
                <a
                    href="/"
                    className="nav-link py-3 rounded-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Dashboard"
                    data-bs-original-title="Dashboard"
                >
                  <i className="bi bi-speedometer2" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
              <li>
                <a
                    href="/"
                    className="nav-link py-3 rounded-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Orders"
                    data-bs-original-title="Orders"
                >
                  <i className="bi bi-table" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
              <li>
                <a
                    href="/"
                    className="nav-link py-3 rounded-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Products"
                    data-bs-original-title="Products"
                >
                  <i className="bi bi-grid" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
              <li>
                <a
                    href="/"
                    className="nav-link py-3 rounded-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Customers"
                    data-bs-original-title="Customers"
                >
                  <i className="bi bi-telephone" style={{ fontSize: '24px' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Navbar;