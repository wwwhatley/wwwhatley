import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleHeader from "../components/TitleHeader"
import FullPortfolio from "../components/fullportfolio"
import MobilePorfolio from "../components/portfoliogrid"
import CTA from "../components/cta"

const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 920px) {
    display: block;
  }
`
const DesktopWrapper = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: block;
  }
`

const Writing = () => (
  <Layout type="about">
    <SEO title="Work" />

    <div className="fadeIn">
      <TitleHeader
        title="Recent work"
        text="For me, the greatest reward that I receive from completing a project, are the lessons that I learned. I view all of my projects are learning opportunities, and look forward to self-developing and strengthening from every client that I serve."
        type="work"
      />
      <DesktopWrapper>
        <FullPortfolio />
      </DesktopWrapper>
      <MobileWrapper>
        <MobilePorfolio />
      </MobileWrapper>
      <CTA />
    </div>
  </Layout>
)

export default Writing
