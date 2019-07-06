import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import FullPortfolio from "../components/fullportfolio"
import CTA from "../components/cta"

const Work = () => (
  <Layout>
    <SEO title="Home" />
    <TitleHeader
      title="Recent work"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      type="work"
    />
    <FullPortfolio />
    <CTA />
  </Layout>
)

export default Work
