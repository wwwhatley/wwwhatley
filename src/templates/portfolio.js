import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import CTA from "../components/cta"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`

const Information = styled.div`
  height: 100%;
  width: 40%;
  margin: 0 auto;
  padding: 0 0.1em;
  @media (max-width: 1160px) {
    width: 50%;
  }
  @media (max-width: 960px) {
    width: 60%;
  }
  @media (max-width: 720px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

const Portfolio = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Information
          className="portfolio"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Wrapper>
      <CTA />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
        subtitle
        splash {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Portfolio
