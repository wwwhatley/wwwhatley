const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const portfolio = path.resolve(`src/templates/portfolio.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors, "ERROR")
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: portfolio,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
