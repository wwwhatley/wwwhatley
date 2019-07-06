import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import PortfolioGrid from "../components/portfoliogrid"

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <TitleHeader
      title="Empowering clients to represent their best through technology"
      text="Hi there! I'm William and I'm passionate about utilizing my ever-evolving technology skills to provide value for you and your organization. I've served as a product owner, systems designer and engineer, executive, project manager, and developer. "
      type="home"
    />
    <PortfolioGrid />
  </Layout>
)

export default Index
