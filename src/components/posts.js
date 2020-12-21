import React from "react"
import styled from "styled-components"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Subtitle, Text } from "../theme/index"
import { FaAngleRight } from "react-icons/fa"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1600px;
  padding: 4em 0;
  margin: 2em auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  width: 50%;
  margin: 1em auto 0 auto;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: auto;
  @media (max-width: 920px) {
    grid-auto-rows: auto;
    width: 100%;
  }
`

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 2em 1.5em;
  border: 1.5px solid transparent;
  border-bottom: 0.5px solid #e3e3e3;
  transition: 500ms;
  border-radius: 8px;
  @media (min-width: 920px) {
    &:hover {
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 720px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-right: 1em;
  @media (max-width: 720px) {
    margin-right: 0;
    width: 100%;
    align-items: center;
    margin-top: 1.5em;
  }
`

const Row = styled.div`
  display: flex;
  align-content: center;
  height: 25px;
  margin-top: 1em;
`

const PostLink = ({ post }) => {
  return (
    <Link to={post.frontmatter.path}>
      <PostWrapper>
        <Column>
          <Subtitle>{post.frontmatter.title}</Subtitle>
          <Text>{post.frontmatter.subtitle}</Text>
          <Row>
            <Text purple>Read more</Text>
            <FaAngleRight
              style={{
                color: "#754d63",
                height: "28px",
                width: "16px",
                marginLeft: ".5em",
              }}
            />
          </Row>
        </Column>
        <div style={{ width: "200px" }}>
          <PackageImage
            alt={`William W Whatley ${post.title} Portfolio Image`}
            fluid={post.frontmatter.splash.childImageSharp.fluid}
          />
        </div>
      </PostWrapper>
    </Link>
  )
}

const Posts = () => (
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
                type
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
    render={data => {
      let newArr = data.allMarkdownRemark.edges.filter(edge => {
        if (edge.node.frontmatter.type === "post") {
          return [...edge]
        }
      })
      return (
        <Wrapper>
          <Grid>
            {newArr.map(edge => (
              <PostLink key={edge.node.id} post={edge.node} />
            ))}
          </Grid>
        </Wrapper>
      )
    }}
  />
)

export default Posts
