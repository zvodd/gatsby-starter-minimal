const StripeData = [
  {
    id: "prod_1",
    name: "Shoe",
    prices: [
      {
        price_id: "price_1",
        value: 12300,
      },
    ],
  },
  {
    id: "prod_2",
    name: "Bucket",
    prices: [
      {
        price_id: "price_2_1",
        value: 12300,
      },
    ],
  },
  {
    id: "prod_3",
    name: "McDonalds",
    prices: [
      {
        price_id: "price_3_1",
        value: 12300,
      },
    ],
  },
  {
    id: "prod_4",
    name: "Zoomer",
    prices: [
      {
        price_id: "price_4_1",
        value: 12300,
      },
      {
        price_id: "price_4_2",
        value: 12300,
      },
    ],
  },
]

// cart data should be shallow structure, e.g. a table
const TestCartData = [
  {
    productId: "prod_4",
    priceId: "price_4_1",
    value: 12300,
    // ...
  },
  {
    productId: "prod_4",
    priceId: "price_4_1",
    value: 12300,
  },
]

export {TestCartData, StripeData}