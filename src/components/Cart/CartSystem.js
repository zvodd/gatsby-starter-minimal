
///
const testing = true
///

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
TestCartData = [
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



var cart = LoadCart()

function RemoveFromCart(cartitem, limit) {
  var findLimit = limit ?? 1

  const filterKeys = Object.keys(cartitem)

  // Build list of entry indexes marked for removal.
  var foundForRemoval = []
  for (var i = 0; i < cart.length; i++) {
    // Clone cart item with only the keys given by arg "cartitem".
    // aka Filtered Shallow Clone
    var item = {}
    Object.entries(cart[i])
      .filter(([key, value]) => filterKeys.includes[key])
      .forEach(([key, value]) => (item[key] = value))

    // add items to list up to limit.
    if (item == cartItem) {
      if (removedCount > findLimit) {
        break
      } else {
        foundForRemoval.push(i)
        findLimit++
      }
    }
  }
  // Filter cart by index of marked-for-removal items.
  const newcart = cart.filter((_, i) => !foundForRemoval.includes(i))
  return newcart
}

function AddToCart(cartItem){
    return cart = [...cart, cartItem]
}

function LoadCart() {
  // load cart from local storage or empty
  cart = localStorage?.get("cart") || []

  if (testing) {
    if (cart === []) {
      cart = TestCartData
    }
  }

  // do XHR request for session cart?
  // if session cart, do smart merge.

  return cart
}

function dictSwap(json) {
  var ret = {}
  for (var key in json) {
    ret[json[key]] = key
  }
  return ret
}

function dictFromPairs(pairs) {
  var obj = {}
  pairs.forEach(function (entry) {
    obj[entry[0]] = entry[1]
  })
  return obj
}
