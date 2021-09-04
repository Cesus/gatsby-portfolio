import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/" id="name">
          Jason Au
        </Link>
      </h1>
      <div className="links">
        <Link to="/projects" className="left-hover">
          Projects
        </Link>
        <Link to="/about" className="left-hover">
          About
        </Link>
      </div>
    </nav>
  )
}
