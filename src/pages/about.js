import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import Headshot from "../components/headshot"
import { Text } from "../theme/index"
import CTA from "../components/cta"
import Competencies from "../components/competencies"

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
  align-items: center;
  @media (max-width: 920px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`

const Div = styled.div`
  width: 65%;
  @media (max-width: 920px) {
    width: 95%;
    margin-top: 1em;
    text-align: center;
  }
`

const Bio = () => (
  <Wrapper>
    <div style={{ width: "100%", maxWidth: "250px" }}>
      <Headshot />
    </div>
    <Div>
      <Text>
        William has experience developing applications, as well as leading
        engineering teams. He has mentored and even served as a judge for a
        public high school’s program in Florida, where he gave presentations and
        taught programming, usability, product ideation, UI/UX, and
        entrepreneurship. where he gave presentations and taught programming,
        usability, product ideation, UI/UX, and entrepreneurship.
      </Text>
    </Div>
  </Wrapper>
)

const About = () => (
  <Layout type="about">
    <SEO title="Home" />
    <Fade bottom>
      <TitleHeader title="CEO | CTO | Technologist" type="about" />
      <Bio />
      <Competencies
        title="Management"
        text="leadership | execution | marketing | sales | team building | public speaking | product ideation | radical candor | product/system design | agile methodologies | scrum"
      />
      <Competencies
        title="Technologies"
        text="aws cloud infrastructure | javaScript | react native | react.JS | vue.JS | gatsby.JS |  node.JS | mongoDB | mySQL | express | graphQL | redux | flutter | firebase | git | github"
      />
      <Competencies
        title="Languages"
        text="english (native) | spanish (intermediate)"
      />
      <Competencies
        title="Interests"
        text="new technologies | sustainability | quantum computation | space | cooking | traveling | culture | people | "
      />
    </Fade>
  </Layout>
)

export default About
