<script>
    import {shop} from '$lib/db'
    import Product from '$lib/components/ProductRow.svelte'
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

    export let data = []

	let percentValue = 10;
    let skuProductsInStore = []
    let products = []

    // $: console.log($shop.catalog)
    $: skuProductsInStore = $shop.catalog.map(el=>el.sku) || []

    $: products = data.products.filter( el => {
        console.log(skuProductsInStore)
        return !skuProductsInStore.includes( el.sku )
    })

</script>

<div class="mx-2">
    <h2 class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
          
        <span>Agregar Productos</span> 
    </h2>

    
    <!-- Products Table -->
    <div class="flex">

        <div class="w-64">
    
        </div>

        <div class="border border-gray-200 overflow-hidden rounded-xl">

            <!-- Toolbar -->
            <div class="flex justify-between mb-2">
                <div class="">
                    <label for="price" class="flex items-center block text-sm font-medium text-gray-700">
                        Sobreprecio
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-2">
                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </label>
                    <div class="relative mt-1 rounded-md">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">%</span>
                    </div>
                    <input bind:value={percentValue} type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Porciento de ganancia">
                    </div>
                </div>    
                <button class="btn secondary">Agregar Todo</button>
            </div>            
            
            <table clase="">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th class="text-right">Precio</th>
                        <th class="text-right">Venta</th>
                        <th class="text-right">Ganancia</th>
                    </tr>
                </thead>
                <tbody>
                    {#each products as product (product.sku)}
                        <tr 
                            class="text-sm"
                            transition:scale|local={{ start: 0.7 }}
                            animate:flip={{ duration: 200 }}
                        >
                            <Product {product} {percentValue} />
                        </tr>
                    {/each}
                </tbody>
            </table>
        
        </div>

    </div>    
</div>

