import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import PortfolioGrid from "../components/portfoliogrid"

const Index = () => (
  <Layout type="home">
    <SEO title="Home" />
    <div className="fadeIn">
      <TitleHeader
        title="Hi! I’m Will, your new Chief Technology Officer."
        text="From concept to at-scale, I’ve worked with a number of startups and enterprises in meeting and exceeding their ever-evolving technical objectives. I help ideate, strategize implementations, source engineers, manage project teams, architect and design systems, and oversee production environments. Combined, I have developed applications with over 90,000 users and $3M ARR."
        type="home"
      />
      <PortfolioGrid />
    </div>
  </Layout>
)

export default Index
