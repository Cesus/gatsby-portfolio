import Layout from "../components/Layout"
import React from "react"
import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Au</title>
      </Helmet>
      <section className={styles.header}>
        <div>
          <h2>Hey!</h2>
          <h3>I'm Jason Au</h3>
          <p>
            I am a computer science student at Carleton U. My passion is making
            technology better suited for human health.
          </p>
          <Link className={styles.btn} to="/projects">
            Check out my projects!
          </Link>
        </div>
        <StaticImage
          src="../images/adobe-bike.jpg"
          alt="banner"
          placeholder="blurred"
          style={{
            maxWidth: "70%",
          }}
        />
      </section>
    </Layout>
  )
}
