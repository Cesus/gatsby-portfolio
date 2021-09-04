// import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer>
      <h3 className="title">Contact Me!</h3>
      {/* <Link to="https://github.com/Cesus">Github</Link>
      <Link to="https://www.linkedin.com/in/jason-au-599146188/">LinkedIn</Link> */}
      <div className="social-links">
        <a href="https://github.com/Cesus" className="left-hover">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/jason-au-599146188/"
          className="left-hover"
        >
          LinkedIn
        </a>
      </div>

      <p>© 2021 Jason Au</p>
    </footer>
  )
}
