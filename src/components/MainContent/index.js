import React from 'react';

import { Link } from 'react-router-dom';

export default function MainContent() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Start Bootstrap </div>
          <div className="list-group list-group-flush">
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Shortcuts
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Overview
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Events
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Profile
            </Link>
            <Link
              to="/"
              className="list-group-item list-group-item-action bg-light"
            >
              Status
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h1 className="mt-4">Simple Sidebar</h1>
            <p>
              The starting state of the menu will appear collapsed on smaller
              screens, and will appear non-collapsed on larger screens. When
              toggled using the button below, the menu will change.
            </p>
            <p>
              Make sure to keep all page content within the{' '}
              <code>#page-content-wrapper</code>. The top navbar is optional,
              and just for demonstration. Just create an element with the{' '}
              <code>#menu-toggle</code> ID which will toggle the menu when
              clicked.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
