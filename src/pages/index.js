import Layout from "../components/Layout"
import React from "react"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & Web developer in Ottawa, ON.</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}
