<script>
	import {shop, cart} from '$lib/db'
	import Product from '$lib/components/Product.svelte'
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    let store = $shop
    let catalog = $shop.catalog
    let q = ''

    $: products = catalog.filter( el => el.catalogDescrip.toLowerCase().includes( q.toLocaleLowerCase()))

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
    <div class="flex justify-center mb-4">
        <div>
            <input bind:value={q} type="text" >
        </div>
    </div>
    <ul class="grid gid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-center place-content-center ">
	{#each products as product (product.sku)}
        <li>
            <Product {product}  on:add={addToCart} />
        </li>
    {/each}
    </ul>

</div>
