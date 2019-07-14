const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const portfolio = path.resolve(`src/templates/portfolio.js`)
  const writing = path.resolve(`src/templates/writing.js`)

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
      let path = node.frontmatter.path
      createPage({
        path: path,
        component: path.includes("work") ? portfolio : writing,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
