const path = require("path")

// Use Gatsby's createPages function to programmatically generate a SitePage
// for each Product. In order to create a SitePage, we need to find the images
// (Files) associated with the Product.
//
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages

exports.createPages = async ({ graphql, actions }) => {
  var productsQuery = await graphql(productTemplateQuery)
  const productTemplate = path.resolve("src/templates/productTemplate.js")
//   console.log(JSON.stringify(productsQuery, null,2))
  productsQuery.data.allProduct.edges.forEach((edge) => {
    const product = edge.node
    actions.createPage({
      path: "product/" + product.slug,
      component: productTemplate,
      context: {
        product: product,
        id: product.id,
        imagefolder: `products/${product.id}`,
      },
      name: product.name,
    })
  })
}

const productTemplateQuery = `
{
  allProduct {
    edges {
      node {
        name
        id
        slug
      }
    }
  }
}
`