<script>
    import {shop,cart} from '$lib/db'
    import { srcImg } from '$lib/util'
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    $: products = $cart.products

    const decrement = (idx) => {
        let quantity = products[idx].quantity - 1 

        if ( quantity <= 0 )
            products.splice( idx, 1 )
        else
            products.splice( idx, 1, {...products[idx], quantity })

        $cart.products = products
    }

    const increment = (idx) => {
        products.splice( idx, 1, {...products[idx], quantity: products[idx].quantity + 1 })
        $cart.products = products
    }

    const removeProduct = (idx) => {
        products.splice( idx, 1 )
        $cart.products = products
    }

</script>

<h1>Carrito de Compras</h1>
<div class="border border-gray-200 overflow-hidden rounded-xl px-12 py-6">
    {#if $cart.products.length }
        <ul class="divide-y divide-gray-200">
            {#each $cart.products as product, idx (product.sku)}
                <li class="flex py-6 " transition:scale|local={{ start: 0.7 }} animate:flip={{ duration: 200 }}>

                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src="{srcImg(product.images[0])}" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center">
                    </div>
        
                    <div class="ml-4 flex-1">
                        <div>
                            <div class="text-base font-medium text-gray-900">
                                <h3>
                                    <a href="#">{product.catalogDescrip}</a>
                                </h3>
                            </div>
                            <p class="font-medium">
                                <span class="text-sm text-gray-600">UYU</span> {product.priceSale}
                            </p>
                            <p class="mt-1 capitalize text-sm text-gray-400">
                                {product.categories.join().toLowerCase()}
                            </p>
                        </div>
                    </div>
        
                    <div class="flex flex-col flex-1 items-end justify-between text-sm">
                        <div class="flex items-center border w-24 bg-white">
                            <button on:click={decrement(idx)} class="p-2 border-r-0 font-extrabold bg-gray-100 border-r">-</button>
                            <div  class="grow">
                                <input class="w-full rounded-none p-1 !border-0 text-center"
                                    readonly 
                                    type="text" 
                                    name="quantity" 
                                    id="quantity" 
                                    bind:value={product.quantity}>
                            </div>
                            <button on:click={increment(idx)} class="p-2 bg-gray-100 font-bold border-l">+</button>
                        </div>                    
        
                        <div class="flex">
                            <button on:click={removeProduct(idx)} type="button" class="font-medium text-gray-300 hover:text-bee">Remove</button>
                        </div>
                    </div>
                </li>    
        
            {/each}
        </ul>
    {:else}
        <div class="text-center">
            <p class="text-2xl">El carrito está vacío</p>
            <a class="font-bold" href="/{$shop.slug}">Comienza a comprar ahora &rarr;</a>

        </div>
    {/if}
    
</div>

{#if $cart.products.length }
    <div class="flex items-center my-4 space-x-2 justify-end">
        <a href="/{$shop.slug}" class="btn bg-gray-200">Seguir Comprando</a>
        <button class='btn primary'>Pagar</button>
    </div>
    
{/if}

