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
        text="From concept to at-scale, I’ve worked with startups and enterprises in meeting and exceeding their ever-evolving technical objectives. As a fractional CTO, I help ideate, strategize implementations, source engineers, manage project teams, architect and design systems, and oversee production environments. Experienced with big data, ML, native and web apps. Combined, I have designed, developed, deployed, and managed applications with over 90,000 users and $3M ARR."
        type="home"
      />
      <PortfolioGrid />
    </div>
  </Layout>
)

export default Index
