import React from "react"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import FullPortfolio from "../components/fullportfolio"
import CTA from "../components/cta"

const Work = () => (
  <Layout type="about">
    <SEO title="Home" />
    <Fade bottom>
      <TitleHeader
        title="Recent work"
        text="For me, the greatest reward that I receive from completing a project, are the lessons that I learned. I view all of my projects are learning opportunities, and look forward to self-developing and strengthening from every client that I serve."
        type="work"
      />
      <FullPortfolio />
      <CTA />
    </Fade>
  </Layout>
)

export default Work
