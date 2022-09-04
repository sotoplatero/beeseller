<script>
    import {shop} from '$lib/db'
	let title = $shop.name;

	const save = () => {
        $shop.name = title
		$shop.slug = title.toLowerCase().replace(' ','-')
        goto('/shop')
    }    
</script>

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