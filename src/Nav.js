import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Quiz App</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/write">Write</a>
        </li>
        <li>
          <a href="/list">list</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;