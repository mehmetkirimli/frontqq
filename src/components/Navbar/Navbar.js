import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let profileId = 3;

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/profiles/" + profileId }}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
