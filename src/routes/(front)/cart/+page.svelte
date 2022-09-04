<script>
    import {shop,cart} from '$lib/db'
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

</script>

<div class="border border-gray-200 overflow-hidden rounded-xl">
    <table clase="">
        <!-- <thead>
            <tr>
                <th></th>
                <th>Producto</th>
                <th class="text-right">Precio</th>
                <th class="text-right">Cantidad</th>
                <th class="text-right">T</th>
            </tr>
        </thead> -->
        <tbody>
            {#each $cart.products as product, idx (product.sku)}
                <tr 
                    transition:scale|local={{ start: 0.7 }}
                    animate:flip={{ duration: 200 }}
                >
                    <td></td>
                    <td class="title font-bold uppercase text-sm">
                        { product.catalogDescrip }
                    </td>
                    <td class="percent font-bold text-right whitespace-nowrap">
                        {product.priceSale}
                    </td>
                    <td class="gain text-center">
                        <div class="flex items-center border w-24 mx-auto bg-white">
                            <button on:click={decrement(idx)} class="p-2 border-r-0 font-extrabold bg-gray-100 border-r">-</button>
                            <div  class="grow">

                                <input class="w-full rounded-none p-2 !border-0 text-center"
                                    readonly 
                                    type="text" 
                                    name="quantity" 
                                    id="quantity" 
                                    bind:value={product.quantity}>
                            </div>
                            <button on:click={increment(idx)} class="p-2 bg-gray-100 font-bold border-l">+</button>
                        </div>
                    </td>
                    <td class="percent font-bold text-right whitespace-nowrap">
                        12
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    
</div>

{#if $cart.products.length }
    <div class="flex items-center my-4 space-x-2 justify-end">
        <a href="/{$shop.slug}" class="btn bg-gray-200">Seguir Comprando</a>
        <button class='btn primary'>Pagar</button>
    </div>
    
{/if}

