import Layout from "../../components/Layout"
import React from "react"
import * as styles from "../../styles/projects.module.css"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes

  console.log(data)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h5>Portfolio</h5>
        <div className={styles.projects}>
          {projects.map(project => (
            <div className={styles.project}>
              <h3>{project.frontmatter.title}</h3>
              <GatsbyImage
                image={getImage(project.frontmatter.thumb)}
                alt="Banner"
                quality={100}
                height={10}
                style={{
                  maxWidth: "40%",
                }}
                className={styles.projectBanner}
              />
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
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }
`
