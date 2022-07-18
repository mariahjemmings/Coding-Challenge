import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Get Random User</Link>
            </li>
            <li>
              <Link to="/filter%20for%20users">Filter for Users</Link>
            </li>
          </ul>
        </nav>
        </div>
        </div>
  )}

export default Navigation;