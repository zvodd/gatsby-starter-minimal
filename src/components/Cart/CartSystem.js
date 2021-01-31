// Keep this code as purly functional style:
// All state provided by arguments, all effects provided by return value.

// This function is waay flexiable. Maybe not a great idea.
function set_RemoveFromCart(cart, cartItem, limit) {
  var findLimit = limit ?? 1

  const filterKeys = Object.keys(cartItem)

  // Build list of entry indexes marked for removal.
  var foundForRemoval = []
  for (var i = 0; i < cart.length; i++) {
    // Clone cart item with only the keys given by arg "cartItem".
    // aka Filtered Shallow Clone
    const item = Object.fromEntries(
      Object.entries(cart[i]).filter(([key, value]) => filterKeys.includes(key))
      )
    // Collect matching item indexes up to a count limit.
    if (JSON.stringify(item) === JSON.stringify(cartItem)) {
      if (foundForRemoval.length > findLimit) {
        break
      } else {
        foundForRemoval.push(i)
      }
    }
  }
  // Filter cart by index of marked-for-removal items.
  const newcart = cart.filter((_, i) => !foundForRemoval.includes(i))
  return newcart
}

function set_AddToCart(cart, cartItem) {
  return (cart = [...cart, cartItem])
}

// function dictSwap(json) {
//   var ret = {}
//   for (var key in json) {
//     ret[json[key]] = key
//   }
//   return ret
// }

// function dictFromPairs(pairs) {
//   var obj = {}
//   pairs.forEach(function (entry) {
//     obj[entry[0]] = entry[1]
//   })
//   return obj
// }

const CartSystem = {
  set_AddToCart,
  set_RemoveFromCart,
}

export default CartSystem
