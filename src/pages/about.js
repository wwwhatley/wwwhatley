import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import Headshot from "../components/headshot"
import { Text } from "../theme/index"

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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
  <Layout>
    <SEO title="Home" />
    <TitleHeader title="CEO | CTO | Technologist" type="about" />
    <Bio />
  </Layout>
)

export default About
