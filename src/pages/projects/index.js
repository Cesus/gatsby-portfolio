import Layout from "../../components/Layout"
import React from "react"
import * as styles from "../../styles/projects.module.css"
import { graphql, Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export default function Projects({ data }) {
  const projects = data.projects.nodes

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h5>Portfolio</h5>
        <div className={styles.projects}>
          {projects.map(project => (
            // <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div className={styles.project}>
              <h3>{project.frontmatter.title}</h3>
              <div className={styles.stack_wrapper}>
                {project.frontmatter.stack
                  .toString()
                  .split(" ")
                  .map(stack => (
                    <span>{stack}</span>
                  ))}
              </div>
              <p>{project.frontmatter.description}</p>
              <div className={styles.code_links}>
                <a
                  href={project.frontmatter.demo}
                  id={styles.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo{" "}
                  <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                </a>
                <a
                  href={project.frontmatter.github}
                  id={styles.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> View Code
                </a>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          description
          demo
          github
        }
        id
      }
    }
  }
`
