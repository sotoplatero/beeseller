import {shop} from '$lib/db'

export const toggleProduct = (product) => {
    let catalog = $shop.catalog
    let catalogHasProduct = catalog.some( el => el.sku === product.sku )

    $shop.catalog = catalogHasProduct
        ? catalog.filter( el => el.sku != product.sku )
        : [ ...catalog,  product ]
}
