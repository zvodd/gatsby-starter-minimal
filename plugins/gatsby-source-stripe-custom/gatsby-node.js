const slug = require("slug")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// Stripe allows us to return one Product for each Price, but we want
// a list of all Products with each of its Prices included. This script
// creates a ProductPage node for each Product stored in Stripe.

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Product implements Node {
      metadata: [StripeProductMetadata]
    }
    type StripeProductMetadata {
        type : String!
    }
  `
  createTypes(typeDefs)
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const products = {} // accumulate list of products in this object
  for await (const price of stripe.prices.list({
    expand: ["data.product"],
    // limit: 100, // default is 100.
  })) {
    if (!products[price.product.id])
      // if the product is new,
      // save it in the accumulator with an empty price list
      products[price.product.id] = { prices: [], ...price.product }
    // and whether or not the product is newly created,
    // push the current price onto the price list
    products[price.product.id].prices.push(price)
  }
  // Now that we have a duplicate-free list of products with a
  // complete list of prices, create a Product node per each.
  Object.entries(products).forEach(([id, product]) => {
    product = {...product, slug: slug(product.name)}
    const node = {
      id: createNodeId(id),
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        mediaType: `text/html`,
        content: product.name,
        contentDigest: createContentDigest(JSON.stringify(product)),
      },
      ...product,
    }
    console.debug(`Creating node ${node.name} from Stripe product ${id}`)
    actions.createNode(node)
  })
}
