import React from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
  padding: 4em 0;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 920px) {
    padding: 2em;
    margin: 0;
  }
`

const PackageImage = styled(Img)`
  width: 100%;
  background: ${props => props.background};
  object-fit: contain;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  width: 100%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 920px) {
    grid-auto-rows: auto;
    width: 100%;
  }
`

const PackageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1.5px solid transparent;
  transition: 500ms;
  border-radius: 8px;
  @media (min-width: 920px) {
    &:hover {
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
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

const PortfolioGrid = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          limit: 6
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                type
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
    render={data => {
      let newArr = data.allMarkdownRemark.edges.filter(edge => {
        if (edge.node.frontmatter.type === "portfolio") {
          return [...edge]
        }
      })
      return (
        <Wrapper>
          <Grid>
            {newArr.map(edge => (
              <PortfolioLink key={edge.node.id} post={edge.node} />
            ))}
          </Grid>
        </Wrapper>
      )
    }}
  />
)

export default PortfolioGrid
