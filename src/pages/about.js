import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import Headshot from "../components/headshot"
import { Text } from "../theme/index"
import Competencies from "../components/competencies"
import { Link } from "gatsby"

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
        I’ve been self-employed for three years, in which I’ve founded,
        developed, and executed various technology startups--I’m an experienced
        developer and subject-matter expert on a variety of cutting-edge
        technologies and frameworks, and was even a public schools technology
        mentor and judge for the Pinellas Education Foundation. Furthermore, my
        network and connections are really what I’m most proud of--for skills
        that I lack or cannot devote time towards, I have someone far more
        qualified to fill the gap. Currently developing{" "}
        <Link to="/work/urbancrop" style={{ color: "#F88747" }}>
          UrbanCrop
        </Link>{" "}
        in Medellin, Colombia.
      </Text>
    </Div>
  </Wrapper>
)

const About = () => (
  <Layout type="about">
    <SEO title="Hi!" />
    <div className="fadeIn">
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
    </div>
  </Layout>
)

export default About
