import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import Headshot from "../components/headshot"
import { Text } from "../theme/index"
import CTA from "../components/cta"

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`

const Bio = () => (
  <Wrapper>
    <div style={{ width: "100%", maxWidth: "250px" }}>
      <Headshot />
    </div>
    <div style={{ width: "65%" }}>
      <Text>
        William has experience developing applications, as well as leading
        engineering teams. He has mentored and even served as a judge for a
        public high school’s program in Florida, where he gave presentations and
        taught programming, usability, product ideation, UI/UX, and
        entrepreneurship. where he gave presentations and taught programming,
        usability, product ideation, UI/UX, and entrepreneurship.
      </Text>
    </div>
  </Wrapper>
)

const About = () => (
  <Layout type="about">
    <SEO title="Home" />
    <Fade bottom>
      <TitleHeader title="CEO | CTO | Technologist" type="about" />
      <Bio />
      <CTA />
    </Fade>
  </Layout>
)

export default About
