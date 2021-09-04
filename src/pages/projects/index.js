import Layout from "../../components/Layout"
import React from "react"
import * as styles from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Check out my projects below</h3>
      </div>
    </Layout>
  )
}
