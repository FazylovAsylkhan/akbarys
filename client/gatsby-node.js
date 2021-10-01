const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allPageMainJson {
        nodes {
          lang
          url
        }
      }
      allPageAkbarysAboutJson {
        nodes {
          url
          lang
        }
      }
      allPageCareerJson {
        nodes {
          url
          lang
        }
      }
      allPageH2SServiceJson {
        nodes {
          url
          lang
        }
      }
      allPageSftServiceJson {
        nodes {
          lang
          url
        }
      }
      allPageVerificationLaboratoryJson {
        nodes {
          url
          lang
        }
      }
      allPageServiceCenterJson {
        nodes {
          url
          lang
        }
      }
      allPageContactsJson {
        nodes {
          url
          lang
        }
      }
      allPagePressCenterJson {
        nodes {
          url
          lang
        }
      }
      allPagePoliticsJson {
        nodes {
          url
          lang
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            contentPost {
              url
              lang
            }
          }
        }
      }
      allPage404Json {
        nodes {
          url
          lang
        }
      }
    }
  `)

  // Create Main Page
  data.allPageMainJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/main.tsx"),
        context: { lang },
      })
    }
  })
  // Create AkbarysAbout Page
  data.allPageAkbarysAboutJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/akbarys-about.tsx"),
        context: { lang },
      })
    }
  })
  // Create H2s Service Page
  data.allPageH2SServiceJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/h2s-service.tsx"),
        context: { lang },
      })
    }
  })
  // Create Career Page
  data.allPageCareerJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/career.tsx"),
        context: { lang },
      })
    }
  })
  // Create Sft Service Page
  data.allPageSftServiceJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/sft-service.tsx"),
        context: { lang },
      })
    }
  })
  // Create Verification Laboratory Page
  data.allPageVerificationLaboratoryJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/verification-laboratory.tsx"),
        context: { lang },
      })
    }
  })
  // Create Service Center Page
  data.allPageServiceCenterJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/service-center.tsx"),
        context: { lang },
      })
    }
  })
  // Create Contacts Page
  data.allPageContactsJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/contacts.tsx"),
        context: { lang },
      })
    }
  })
  // Create Press Center Page
  data.allPagePressCenterJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/press-center.tsx"),
        context: { lang },
      })
    }
  })
  // Create Politics Page
  data.allPagePoliticsJson.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/politics.tsx"),
        context: { lang },
      })
    }
  })
  // Create Posts
  data.allMarkdownRemark.nodes.forEach(node => {
    const { url, lang } = node.frontmatter.contentPost
    if (url) {
      try {
        actions.createPage({
          path: `press-center/${url}`,
          component: path.resolve("./src/templates/singlePost/single-post.tsx"),
          context: { url, lang },
        })
      } catch (e) {
        throw e
      }
    }
  })
  // Create 404 page
  data.allPage404Json.nodes.forEach(node => {
    const { url, lang } = node
    if (url) {
      actions.createPage({
        path: url,
        component: path.resolve("./src/templates/404.tsx"),
        context: { lang },
      })
    }
  })
}