import Layout from "../components/Layout"
import React from "react"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Hey!</h2>
          <h3>I'm Jason Au</h3>
          <p>
            I am a computer science student at Carleton U. My passion is making
            technology better suited for human health.
          </p>
          <Link className={styles.btn} to="/projects">
            Check out my projects
          </Link>
        </div>
        <img
          src="/adobe-bike.jpg"
          alt="banner"
          style={{ maxWidth: "70%" }}
        ></img>
      </section>
    </Layout>
  )
}
