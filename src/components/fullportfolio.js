import React from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 100%;
  max-width: 75%;
  height: 100%;
  margin: 2em auto;
  display: flex;
  text-align: center;
  justify-content: space-between;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
width: 500px;
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

const PortfolioLink = ({ post }) => {
  return (
    <Link to={post.frontmatter.path}>
      <PackageWrapper>
        <PackageImage
          alt={`William W Whatley ${post.title} Portfolio Image`}
          fluid={post.frontmatter.splash.childImageSharp.fluid}
        />
      </PackageWrapper>
    </Link>
  )
}

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
                image
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            alignItems: "center",
            width: "100%",
          }}
        >
          {data.allMarkdownRemark.edges.slice(0, 2).map(edge => (
            <PortfolioLink key={edge.node.id} post={edge.node} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ height: "150px" }} />
          {data.allMarkdownRemark.edges.slice(2, 4).map(edge => (
            <PortfolioLink key={edge.node.id} post={edge.node} />
          ))}
        </div>
      </Wrapper>
    )}
  />
)

export default FullPortfolio
