<script>
	import {shop} from '$lib/db'
    import {goto} from '$app/navigation'
	let title = $shop.name
	const save = () => {
		$shop.name = title,
		$shop.slug = title.toLowerCase().replace(/\s+/,'-')
		goto('/config/shop')
	}

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
