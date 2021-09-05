import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>
        <Link to="/" id="name">
          {title}
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
