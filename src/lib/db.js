import {get, derived} from 'svelte/store'
import { writable  } from 'svelte-local-storage-store'

// First param `preferences` is the local storage key.
// Second param is the initial value.
const shop = writable('shop', {
  name: '',
  slug: '',
  catalog: [],
})

const cart = writable('cart', {
  name: '',
  address: '',
  products: [],
})


const totalItemsInStore = derived(cart, ( $cart ) => {
  return $cart.products.reduce( ( prev, curr ) => prev + curr.quantity, 0)
})

const toggleProduct = (product) => {
  let store = get(shop)
  let {catalog} = store

  let catalogHasProduct = catalog.some( el => el.sku === product.sku )

  catalog = catalogHasProduct
      ? catalog.filter( el => el.sku != product.sku )
      : [ ...catalog,  product ]

  shop.set({ ...store, catalog })
}

export { shop, cart, totalItemsInStore, toggleProduct }
