import React from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Text, Subtitle } from "../theme"

const Wrapper = styled.div`
  width: 100%;
  max-width: 75%;
  height: 100%;
  margin: 2em auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
  @media (max-width: 920px) {
    flex-direction: column;
    max-width: 100%;
  }
`

const PackageImage = styled(Img)`
  width: 100%;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 50px;
  width: 90%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: auto;
  @media (max-width: 720px) {
    grid-auto-rows: auto;
    width: 85%;
  }
`

const PackageWrapper = styled.div`
position: relative;
margin: auto;
margin-top: 4em;
width: 100%:
height: 100%;
border-radius: 8px;
cursor: pointer;
@media (min-width: 2000px) {
  max-width: 850px;
}
@media (min-width: 3000px) {
  max-width: 1012px;
}
@media (max-width: 780px) {
  width: 425px;
}
@media (max-width: 500px) {
  width: 350px;
}
  }
`
const FullItemWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  border-radius: 8px;
  background-color: ${props => props.background};
  transition: 500ms;
  &:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
    transform: translateY(-20px);
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 50%;
`

const FullItem = ({ data }) => (
  <Link to={data.frontmatter.path}>
    <FullItemWrapper background={`${data.frontmatter.color}`}>
      <Div>
        <Subtitle white>{data.frontmatter.title}</Subtitle>
        <Text white>{data.frontmatter.subtitle}</Text>
      </Div>
      <div style={{ width: "325px" }}>
        <PackageImage
          alt={`William W Whatley ${data.title} Portfolio Image`}
          fluid={data.frontmatter.splash.childImageSharp.fluid}
        />
      </div>
    </FullItemWrapper>
  </Link>
)

const FullPortfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                color
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
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Grid>
          {data.allMarkdownRemark.edges.map(edge => (
            <FullItem key={edge.node.id} data={edge.node} />
          ))}
        </Grid>
      </Wrapper>
    )}
  />
)

export default FullPortfolio
