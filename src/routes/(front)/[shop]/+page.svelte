<script>
	import {shop, cart} from '$lib/db'
	import Product from '$lib/components/Product.svelte'
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    let store = $shop

    function addToCart(event){
        let product = event.detail
        let products = $cart.products
        let indexInCart = products.findIndex( el => el.sku === product.sku )

        if ( indexInCart >= 0 ) {
            let productInCart = products[indexInCart]
            products.splice( indexInCart, 1, {...productInCart, quantity: productInCart.quantity + 1 })
        } else {
            products = [ ...products, {...product, quantity: 1} ]
        }
        $cart.products = products
    }
</script>

<svelte:head>
	<title>{store.name}</title>
	<meta name="description" content="Mostrar Tienda" />
</svelte:head>


<!-- Products List -->
<div class="">

    <ul class="grid grid-cols-4 gap-6">
	{#each $shop.catalog as product (product.sku)}
        <li>
            <Product {product}  on:add={addToCart} />
        </li>
    {/each}
    </ul>

</div>
