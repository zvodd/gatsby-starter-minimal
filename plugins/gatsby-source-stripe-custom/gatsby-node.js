const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// Stripe allows us to return one Product for each Price, but we want
// a list of all Products with each of its Prices included. This script
// creates a ProductPage node for each Product stored in Stripe.

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const apiResponse = await stripe.prices.list({
    expand: ["data.product"],
    limit: 100, // there will never be more than 100 prices, right?
  })
  const products = {} // accumulate list of products in this object
  apiResponse.data.forEach((price) => {
    if (!products[price.product.id])
      // if the product is new,
      // save it in the accumulator with an empty price list
      products[price.product.id] = { prices: [], ...price.product }
    // and whether or not the product is newly created,
    // push the current price onto the price list
    products[price.product.id].prices.push(price)
  })
  // now that we have a duplicate-free list of products with a
  // complete list of prices, create a ProductPage node for each
  // product
  Object.entries(products).forEach(([id, product]) => {
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