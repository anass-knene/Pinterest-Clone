import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
function Nav() {
  const [showDiv, setShowDiv] = useState(false);
  const addPicture = () => {
    setShowDiv(!showDiv);
  };
  return (
    <div className="Nav">
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://cdn.freecodecamp.org/demo-projects/images/pinterest-logo.png"
              alt="img"
              width="50"
              height="50"
            />
          </Link>
        </li>
        <li>
          <Link to="">All</Link>
        </li>
        <li>
          <Link to="/myPic">My Pics</Link>
        </li>
        <li className="addPicDiv">
          <span className="ms-1" onClick={addPicture}>
            Add a Pic
            <IoMdArrowDropdown className="ms-1" />
          </span>
          {showDiv ? (
            <div className="dropdownDiv">
              <input type="input" name="picUrl" placeholder="Pic url..." />
              <input
                type="text"
                name="picDescription"
                placeholder="Pic description"
              />
            </div>
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="logBtn">
        <button type="button" className="Logout ps-2 pe-2">
          <AiFillGithub size="25" /> <span className="ms-1"> Login</span>
        </button>
        <input type="button" value="Logout" className="Logout" />
      </div>
    </div>
  );
}

export default Nav;
