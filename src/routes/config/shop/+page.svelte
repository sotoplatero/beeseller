<script>
	import {shop} from '$lib/db'
	import {onMount} from 'svelte'
	import {goto} from '$app/navigation'
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	$: catalog = $shop.catalog

	const removeProduct = (i) => {
		catalog.splice(i,1)
		$shop.catalog = catalog
	}

	const updateProduct = (i) => {
		let product = catalog[i]
		catalog[i] = {
			...product,
			percent: ( product.percentValue / 100 ) + 1,
			priceSale: product.pricePesos + Math.round( (product.percentValue / 100) * product.pricePesos  )     		
		}
		// catalog.splice( i, 1, product )
		$shop.catalog = catalog
	}

	onMount(()=>{
		if (!$shop.name) {
			goto('/')
		}
	})	
</script>

<svelte:head>
	<title>Tienda</title>
	<meta name="description" content="Mostrar Tienda" />
</svelte:head>

<!-- Show Shop -->
<div class="card flex justify-between" >
	<div class="font-bold">
		{$shop.name}
	</div>
	<div class="flex items-center space-x-2">
		{#if $shop.catalog.length }
			<a href="/{$shop.slug}" target="_blank" class="hover:rotate-45 transition">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
				</svg>
				
			</a>
		{/if}
		<a href="/config/shop/edit" class="hover:rotate-45 transition text-gray-400 hover:text-gray-800">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		</a>
	</div>
</div>

<!--  -->
<div class="mt-12 mb-2">
	<a href="/config/catalog" class="btn primary w-full sm:w-52 bg-bee">
		<svg class="w-8 h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
			<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75" />
		</svg>
		<span>Agregar Productos</span>
	</a>
</div>

<!-- Catalog List -->
{#if catalog.length }
	<div class="border border-gray-200 overflow-hidden rounded-xl">
		<table class="">
			<thead>
				<tr>
					<th></th>
					<th class="text-right">Precio</th>
					<th class="text-right">Venta</th>
					<th class="text-right">Porciento</th>
					<th class="text-right">Ganancia</th>
					<th></th>
				</tr>
			</thead>			
			<tbody>
				{#each catalog as product, i (product.sku)}
				<tr class="" transition:scale|local={{ start: 0.7 }} animate:flip={{ duration: 200 }}>
					<td class="grow title font-bold uppercase text-xs sm:text-sm">
						{ product.catalogDescrip }
					</td>
					<td class="price text-right">
						{ product.pricePesos }
					</td>
					<td class="price-sale font-bold text-right">
						{ product.priceSale }
					</td>
					<td class="">
						<input type="text" bind:value={product.percentValue} on:input={() => updateProduct(i)} class="w-16 text-center ml-auto">
					</td>
					<td class="gain text-right">
						<span class="bg-green-100 text-green-600 text-sm font-bold p-1 px-2 rounded ">
							{ Math.round(( product.priceSale - product.pricePesos ) * 0.75 ) }
						</span>
					</td>
					<td class="text-right">
						<button on:click={removeProduct(i)} class="btn secondary ml-auto p-2 rounded">&times;</button>
					</td>
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
