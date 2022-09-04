<script>
	import {shop} from '$lib/db'
    import {goto} from '$app/navigation'
	import Product from '$lib/components/Product.svelte'
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';



</script>

<svelte:head>
	<title>Tienda</title>
	<meta name="description" content="Editar Tienda" />
</svelte:head>

<form class="card space-y-4" on:submit|preventDefault="{save}" >
	<div>
		<label for="title">Nombre de la Tienda</label>
		<input type="text" id="title" bind:value={title}>
	</div>
	<div>
		<button class="btn primary">
			Guardar
		</button>
	</div>
</form>
