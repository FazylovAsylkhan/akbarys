const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark(
        filter: { frontmatter: { contentPost: { lang: { eq: "ru" } } } }
      ) {
        nodes {
          frontmatter {
            contentPost {
              url
            }
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { url } = node.frontmatter.contentPost
    if (url) {
      actions.createPage({
        path: `press-center/${url}`,
        component: path.resolve("./src/templates/single-post.tsx"),
        context: { url },
      })
    }
  })
}
